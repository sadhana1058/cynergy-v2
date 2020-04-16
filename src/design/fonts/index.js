import { createGlobalStyle } from 'styled-components';

import ProductSansRegular from './ProductSans-Regular.ttf';
import ProductSansBold from './ProductSans-Bold.ttf';
import ProductSansLight from './ProductSans-Light.ttf';
import ProductSansMedium from './ProductSans-Medium.ttf';
import ProductSansThin from './ProductSans-Thin.ttf';
import PTMonoRegular from './PTMono-Regular.ttf';
import DevilBreeze from './DevilBreeze-Demi.ttf';

const GlobalFonts = createGlobalStyle`
	@font-face {
		font-family: 'product-sans-bold';
		src: url('${ProductSansBold}') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'product-sans-light';
		src: url('${ProductSansLight}') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'product-sans-medium';
		src: url('${ProductSansMedium}') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
    @font-face {
		font-family: 'product-sans-regular';
	    src: url('${ProductSansRegular}') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'product-sans-thin';
		src: url('${ProductSansThin}') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'pt-mono-regular';
		src: url('${PTMonoRegular}') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'devil-breeze';
		src: url('${DevilBreeze}') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
`;

export default GlobalFonts;
