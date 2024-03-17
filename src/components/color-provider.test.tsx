import { MutableRefObject } from "react";
import { render, act } from "@testing-library/react";
import ColorProvider, { useColor, type ColorContextValue } from "@/components/color-provider";

type ColorRef = MutableRefObject<ColorContextValue | null>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Test({ colorRef }: { colorRef: ColorRef }) {
  colorRef.current = useColor();

  return null;
}

Object.defineProperty(window, "matchMedia", {
  value: () => {
    return {
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  },
});

describe("ColorProvider and useColor", () => {
  const localStoragePrototype = Object.getPrototypeOf(window.localStorage);
  const documentClassListPrototype = Object.getPrototypeOf(document.documentElement.classList);

  let spiedLocalStorageGetItem: jest.SpyInstance,
    spiedLocalStorageSetItem: jest.SpyInstance,
    spiedDocumentClassListAdd: jest.SpyInstance;

  beforeEach(() => {
    spiedLocalStorageGetItem = jest.spyOn(localStoragePrototype, "getItem");
    spiedLocalStorageSetItem = jest.spyOn(localStoragePrototype, "setItem");
    spiedDocumentClassListAdd = jest.spyOn(documentClassListPrototype, "add");
  });

  afterEach(() => {
    spiedLocalStorageGetItem.mockRestore();
    spiedLocalStorageSetItem.mockRestore();
    spiedDocumentClassListAdd.mockRestore();
  });

  test("provides 'light' color by default", async () => {
    const colorRef: ColorRef = { current: null };

    render(
      <ColorProvider>
        <Test colorRef={colorRef} />
      </ColorProvider>,
    );

    expect(spiedLocalStorageGetItem).toHaveBeenCalled();
    expect(spiedLocalStorageGetItem).toReturnWith(null);
    expect(colorRef.current?.color).toMatchInlineSnapshot(`"light"`);
  });

  test("uses the local storage color preference", async () => {
    spiedLocalStorageGetItem.mockReturnValue("dark");

    const colorRef: ColorRef = { current: null };

    render(
      <ColorProvider>
        <Test colorRef={colorRef} />
      </ColorProvider>,
    );

    expect(colorRef.current?.color).toMatchInlineSnapshot(`"dark"`);
  });

  test("sets the color correctly", async () => {
    const colorRef: ColorRef = { current: null };

    render(
      <ColorProvider>
        <Test colorRef={colorRef} />
      </ColorProvider>,
    );

    expect(colorRef.current?.color).toMatchInlineSnapshot(`"light"`);

    act(() => {
      colorRef.current?.setColor("dark");
    });

    expect(colorRef.current?.color).toMatchInlineSnapshot(`"dark"`);
    expect(spiedDocumentClassListAdd).toHaveBeenCalled();
    expect(spiedDocumentClassListAdd).toHaveBeenCalledWith("dark");
    expect(spiedLocalStorageSetItem).toHaveBeenCalled();
    expect(spiedLocalStorageSetItem).toHaveBeenCalledWith("color", "dark");
  });
});
