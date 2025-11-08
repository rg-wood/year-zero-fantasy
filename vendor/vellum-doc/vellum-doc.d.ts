import { LitElement } from 'lit';
import { LionDrawer } from '@lion/ui/drawer.js';
import '@lion/ui/define/lion-drawer.js';
export declare class VellumDocument extends LitElement {
    static styles: import("lit").CSSResult;
    anchors?: boolean;
    private slugify;
    get headings(): HTMLElement[];
    get drawer(): LionDrawer | null;
    get toggle(): HTMLElement | null;
    connectedCallback(): void;
    firstUpdated(): void;
    updated(): void;
    render(): import("lit-html").TemplateResult<1>;
    private renderIndex;
    labelHeaders(): void;
    anchorHeadings(): void;
    exportIndexHeadingParts(): void;
    enableMobileIndexVisibility(): void;
    toggleIndex(): void;
    hideToggle(): void;
    showToggle(): void;
    checkIndexVisibility(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'vellum-doc': VellumDocument;
    }
}
//# sourceMappingURL=vellum-doc.d.ts.map