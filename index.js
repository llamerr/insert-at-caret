function insertAtCaret(txtarea, text, addspace) {
    if (!txtarea) {
        return;
    }

    document.execCommand('insertText', false, text);
    txtarea.blur();
    txtarea.focus();
}

export default insertAtCaret;

