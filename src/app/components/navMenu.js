'use client'

import { BaseLink, OpenLink } from "./navLink"

export default function navMenu ({activeBlock, activePage}) {
    switch (activeBlock) {
        case 'about': {
            return (
                <ul>

                </ul>
            )
        };
        case 'prodation': {
            return (
                <ul>
                    
                </ul>
            )
        };
        case 'career': {
            return (
                <ul>
                    
                </ul>
            )
        };
        case 'contacts': {
            return (
                <ul>
                    
                </ul>
            )
        }
    }

    
}