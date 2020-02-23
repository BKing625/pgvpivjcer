class Checker {
    constructor(props) {
        console.log('hello chker');
        this.init();
        this.initEvent();
    }

    init(){
        this._nextId = 0;
        this._eRootForm = document.getElementById('checkerForm');

        this.addNewRow();
    }

    initEvent() {
        let self = this;
        document.getElementById('btnAdd')
            .addEventListener('click', () =>{
                self.addNewRow();
            });
    }
    addNewRow(){
        let nextId = this._nextId++;
        let eRow = document.createElement('div');
        eRow.innerHTML = `
                <input type="hidden" value="${nextId}" >
                <label><input type="text" value="${nextId}" /></label>
                <label><input type="number" min="0" max="15" value="0"></label>
                <label><input type="number" min="0" max="15" value="0"></label>
                <label><input type="number" min="0" max="15" value="0"></label>
                <input type="button" value="del">
        `;
        this._eRootForm.appendChild(eRow);
    }

}

window.onload = () =>{
    new Checker();
};
