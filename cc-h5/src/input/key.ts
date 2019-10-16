namespace input {
/////////////////////////////////////////////////////////////////////////////
// References:
// https://help.adobe.com/en_US/AS2LCR/Flash_10.0/help.html?content=00000520.html
/////////////////////////////////////////////////////////////////////////////

export enum Key
{
    _0 = 0x30,
    _1 = 0x31,
    _2 = 0x32,
    _3 = 0x33,
    _4 = 0x34,
    _5 = 0x35,
    _6 = 0x36,
    _7 = 0x37,
    _8 = 0x38,
    _9 = 0x39,

    A = 0x41,
    B = 0x42,
    C = 0x43,
    D = 0x44,
    E = 0x45,
    F = 0x46,
    G = 0x47,
    H = 0x48,
    I = 0x49,
    J = 0x4A,
    K = 0x4B,
    L = 0x4C,
    M = 0x4D,
    N = 0x4E,
    O = 0x4F,
    P = 0x50,
    Q = 0x51,
    R = 0x52,
    S = 0x53,
    T = 0x54,
    U = 0x55,
    V = 0x56,
    W = 0x57,
    X = 0x58,
    Y = 0x59,
    Z = 0x5A,

    NUM_0       = 0x60,
    NUM_1       = 0x61,
    NUM_2       = 0x62,
    NUM_3       = 0x63,
    NUM_4       = 0x64,
    NUM_5       = 0x65,
    NUM_6       = 0x66,
    NUM_7       = 0x67,
    NUM_8       = 0x68,
    NUM_9       = 0x69,
    NUM_MUL     = 0x6A,
    NUM_ADD     = 0x6B,
    NUM_ENTER   = 0x0D,
    NUM_SUB     = 0x6D,
    NUM_DECIMAL = 0x6E,
    NUM_DIV     = 0x6F,

    F1  = 0x70,
    F2  = 0x71,
    F3  = 0x72,
    F4  = 0x73,
    F5  = 0x74,
    F6  = 0x75,
    F7  = 0x76,
    F8  = 0x77,
    F9  = 0x78,
    F10 = 0x79,
    F11 = 0x7A,
    F12 = 0x7B,
    F13 = 0x7C,
    F14 = 0x7D,
    F15 = 0x7E,

    BACKSPACE   = 0x08,
    TAB         = 0x09,
    ENTER       = NUM_ENTER,
    SHIFT       = 0x10,
    CTRL        = 0x11,
    CAPS_LOCK   = 0x14,
    ESC         = 0x1B,
    SPACE       = 0x20,
    PAGE_UP     = 0x21,
    PAGE_DOWN   = 0x22,
    END         = 0x23,
    HOME        = 0x24,
    LEFT        = 0x25,
    UP          = 0x26,
    RIGHT       = 0x27,
    DOWN        = 0x28,
    INSERT      = 0x2D,
    DELETE      = 0x2E,
    NUM_LOCK    = 0x90,
    SCROLL_LOCK = 0x91,
    PAUSE       = 0x13,
    BREAK       = PAUSE,
    COLON       = 0xBA,
    SEMICOLON   = COLON,
    EQUAL       = 0xBB,
    PLUS        = EQUAL,
    SUB         = 0xBD,
    UNDERLINE   = SUB,
    SLASH       = 0xBF,
    DIV         = SLASH,
    QUESTION    = DIV,
    TILDE       = 0xC0,
    LBRACKET    = 0xDB,
    BACKSLASH   = 0xDC,
    RBRACKET    = 0xDD,
    QUOTE       = 0xDE,
    DOT         = 0xBE,
    DECIMAL     = DOT,
}

export namespace Key
{
    export const Enums: ReadonlySet<Key> = new Set([
        Key._0,
        Key._1,
        Key._2,
        Key._3,
        Key._4,
        Key._5,
        Key._6,
        Key._7,
        Key._8,
        Key._9,
        Key.A,
        Key.B,
        Key.C,
        Key.D,
        Key.E,
        Key.F,
        Key.G,
        Key.H,
        Key.I,
        Key.J,
        Key.K,
        Key.L,
        Key.M,
        Key.N,
        Key.O,
        Key.P,
        Key.Q,
        Key.R,
        Key.S,
        Key.T,
        Key.U,
        Key.V,
        Key.W,
        Key.X,
        Key.Y,
        Key.Z,
        Key.NUM_0,
        Key.NUM_1,
        Key.NUM_2,
        Key.NUM_3,
        Key.NUM_4,
        Key.NUM_5,
        Key.NUM_6,
        Key.NUM_7,
        Key.NUM_8,
        Key.NUM_9,
        Key.NUM_MUL,
        Key.NUM_ADD,
        Key.NUM_ENTER,
        Key.NUM_SUB,
        Key.NUM_DECIMAL,
        Key.NUM_DIV,
        Key.F1,
        Key.F2,
        Key.F3,
        Key.F4,
        Key.F5,
        Key.F6,
        Key.F7,
        Key.F8,
        Key.F9,
        Key.F10,
        Key.F11,
        Key.F12,
        Key.F13,
        Key.F14,
        Key.F15,
        Key.BACKSPACE,
        Key.TAB,
        Key.ENTER,
        Key.SHIFT,
        Key.CTRL,
        Key.CAPS_LOCK,
        Key.ESC,
        Key.SPACE,
        Key.PAGE_UP,
        Key.PAGE_DOWN,
        Key.END,
        Key.HOME,
        Key.LEFT,
        Key.UP,
        Key.RIGHT,
        Key.DOWN,
        Key.INSERT,
        Key.DELETE,
        Key.NUM_LOCK,
        Key.SCROLL_LOCK,
        Key.PAUSE,
        Key.BREAK,
        Key.COLON,
        Key.SEMICOLON,
        Key.EQUAL,
        Key.PLUS,
        Key.SUB,
        Key.UNDERLINE,
        Key.SLASH,
        Key.DIV,
        Key.QUESTION,
        Key.TILDE,
        Key.LBRACKET,
        Key.BACKSLASH,
        Key.RBRACKET,
        Key.QUOTE,
        Key.DOT,
        Key.DECIMAL,
    ]);
}

/////////////////////////////////////////////////////////////////////////////
}