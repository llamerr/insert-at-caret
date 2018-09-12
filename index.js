function insertAtCaret(txtarea, text) {
    if (!txtarea) {
        return;
    }

    var front = txtarea.value.substring(0, txtarea.selectionStart);
    var back = txtarea.value.substring(txtarea.selectionEnd, txtarea.value.length);

    txtarea.value = front + text + back;

    var strPos = (front + text).length - 1;

    txtarea.selectionStart = strPos;
    txtarea.selectionEnd = strPos;
    txtarea.focus();
}

export default insertAtCaret;
