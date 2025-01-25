import {Inter} from 'next/font/google';
import { Lusitana } from 'next/font/google';    

export const inter = Inter({subsets: ['latin']}); // this is a font object that can be used in the `className` prop of a JSX element
export const lusitana = Lusitana(
     {weight: ['400', '700'],
     subsets: ['latin']
     }
    
    ); // this is a font object that can be used in the `className` prop of a JSX element