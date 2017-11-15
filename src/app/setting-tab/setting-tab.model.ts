
export class Setting {
    tabId: string;
    tabName: string;
    numberOfTextBox: number;
    numberOfComboBox: number;
    numberOfModalComboBox: number;

    constructor(tabId: string, tabName: string, numberOfTextBox: number, numberOfComboBox: number, numberOfModalComboBox: number) {
        this.tabId = tabId;
        this.tabName = tabName;
        this.numberOfTextBox = numberOfTextBox;
        this.numberOfComboBox = numberOfComboBox;
        this.numberOfModalComboBox = numberOfModalComboBox;
    }

    setNumberOfTextBox(numberOfTextBox: number): void {
        this.numberOfTextBox = parseInt(numberOfTextBox.toString(), 10);
    }

    setNumberOfComboBox(numberOfComboBox: number): void{
        this.numberOfComboBox = parseInt(numberOfComboBox.toString(), 10);
    }

    setNumberOfChildOption(numberOfChildOption: number): void {
        this.numberOfModalComboBox = parseInt(numberOfChildOption.toString(), 10);
    }
}
