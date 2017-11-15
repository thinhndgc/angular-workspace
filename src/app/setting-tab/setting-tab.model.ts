export class Setting {
    tabId: string;
    tabName: string;
    numebrOfTextBox: number;
    numberOfComboBox: number;
    numberOfModalComboBox: number;

    constructor(tabId: string, tabName: string, numebrOfTextBox: number, numberOfComboBox: number, numberOfModalComboBox: number) {
        this.tabId = tabId;
        this.tabName = tabName;
        this.numebrOfTextBox = numebrOfTextBox;
        this.numberOfComboBox = numberOfComboBox;
        this.numberOfModalComboBox = numberOfModalComboBox;
    }

}