import { Component, Method, Element, Prop, State } from '@stencil/core';

@Component({
    tag: 'my-modal',
    styleUrl: 'my-modal.scss'
})
export class MyModal {
    buttons = ['Okay', 'Cancel'];

    @Element() modalEl: HTMLElement;

    @Prop() title: string;
    @Prop() content: string;

    @State() showOptions = false;

    @Method()
    open() {
        this.modalEl.style.display = 'block';
    }

    closeModalHandler() {
        this.modalEl.style.display = 'none';
        this.showOptions = false;
    }

    showOptionsHandler() {
        this.showOptions = true;
    }

    render() {
        let options = null;
        if (this.showOptions) {
            options = (
                this.buttons.map(btn => (
                    <button onClick={this.closeModalHandler.bind(this)}>{btn}</button>
                )));
        }
        return (
            <div>
                <h1>{this.title}</h1>
                <p>{this.content}</p>
                <hr />
                <button onClick={this.showOptionsHandler.bind(this)}>Show Options</button>
                <hr />
                {options}
            </div>
        )
    }
}