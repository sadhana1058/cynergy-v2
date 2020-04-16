import styled, { css } from 'styled-components';

const textStyleMixin = (size, family, letterSpacing, lineHeight) => {
    return css`
        font-size: ${size}px;
        font-family: ${family};
        letter-spacing: ${letterSpacing}px;
        line-height: ${lineHeight}px;
    `;
};

//Text styles
export const ts250b = textStyleMixin(250, 'product-sans-bold', 0, 215);
export const ts100b = textStyleMixin(100, 'product-sans-bold', 0.67, 121);
export const ts80r = textStyleMixin(80, 'product-sans-regular', 0.5, 97);
export const ts50r = textStyleMixin(50, 'product-sans-regular', 0.5, 61);
export const ts60b = textStyleMixin(60, 'product-sans-bold', 0.67, 49);
export const ts40b = textStyleMixin(40, 'product-sans-bold', 0.67, 49);
export const ts30b = textStyleMixin(30, 'product-sans-bold', 0.6, 36);
export const ts30l = textStyleMixin(30, 'product-sans-light', 0.6, 36);

export const ts26b = textStyleMixin(26, 'product-sans-bold', 0.6, 34);

export const tsm24r = textStyleMixin(24, 'pt-mono-regular', 0.67, 28);
export const ts24b = textStyleMixin(24, 'product-sans-bold', 0.6, 28);
export const ts24l = textStyleMixin(24, 'product-sans-light', 0.6, 28);

export const ts22b = textStyleMixin(22, 'product-sans-bold', 0.6, 26);

export const ts20b = textStyleMixin(20, 'product-sans-bold', 0.5, 26);
export const ts20m = textStyleMixin(20, 'product-sans-medium', 0.5, 26);
export const ts20l = textStyleMixin(20, 'product-sans-light', 0.5, 26);

export const ts18b = textStyleMixin(18, 'product-sans-bold', 0.5, 26);
export const tsm18r = textStyleMixin(18, 'pt-mono-regular', 0.5, 26);
export const ts18r = textStyleMixin(18, 'product-sans-regular', 0.5, 26);
export const ts18m = textStyleMixin(18, 'product-sans-medium', 0.5, 26);

// export const ts16b = textStyleMixin(16, 'product-sans-bold', 0.4, 20);
export const ts16l = textStyleMixin(16, 'product-sans-light', 0.4, 24);
export const ts16m = textStyleMixin(16, 'product-sans-medium', 0.4, 24);

export const ts15m = textStyleMixin(15, 'product-sans-medium', 0.5, 22);
export const ts15l = textStyleMixin(15, 'product-sans-light', 0.5, 22);
export const ts15b = textStyleMixin(15, 'product-sans-bold', 0.5, 22);

export const ts14b = textStyleMixin(14, 'product-sans-bold', 0.5, 20);
export const ts14l = textStyleMixin(14, 'product-sans-light', 0.5, 20);
export const ts14m = textStyleMixin(14, 'product-sans-medium', 0.5, 20);
export const ts14r = textStyleMixin(14, 'product-sans-regular', 0.5, 20);

export const ts13l = textStyleMixin(13, 'product-sans-light', 0.5, 18);
// export const ts13m = textStyleMixin(13, 'product-sans-medium', 0.5, 19);

export const ts12b = textStyleMixin(12, 'product-sans-bold', 0.5, 16);
export const ts12l = textStyleMixin(12, 'product-sans-light', 0.5, 16);
export const ts12m = textStyleMixin(12, 'product-sans-medium', 0.5, 16);
export const ts12r = textStyleMixin(12, 'product-sans-regular', 0.5, 16);

export const ts11l = textStyleMixin(11, 'product-sans-light', 0.4, 14);
export const ts11m = textStyleMixin(11, 'product-sans-medium', 0.4, 14);

export const ts10b = textStyleMixin(10, 'product-sans-bold', 0.3, 14);
export const ts10m = textStyleMixin(10, 'product-sans-medium', 0.3, 14);
export const ts10l = textStyleMixin(10, 'product-sans-light', 0.3, 14);
export const ts10r = textStyleMixin(10, 'product-sans-regular', 0.3, 14);

//Neo
export const ts16b = textStyleMixin(16, 'product-sans-bold', 0.5, 22);

export const ts13r = textStyleMixin(13, 'product-sans-regular', 0.43, 20);
export const ts13b = textStyleMixin(13, 'product-sans-bold', 0.43, 20);
export const ts13m = textStyleMixin(13, 'product-sans-medium', 0.5, 18);

//Button Styles
export const tsBtn = textStyleMixin(15, 'product-sans-light', 0.5, 20);
export const tsBtnSmall = textStyleMixin(12, 'product-sans-light', 0.4, 20);

export const colors = {
    main: '#E15337',
    text: '#FFFFFF',
    bg: '#191919',
};

export const Section = styled.section`
    margin: 0 auto;
    padding: 150px 0;
    max-width: 1000px;
`;
