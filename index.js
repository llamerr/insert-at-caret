function insertAtCaret(txtarea, text, addspace) {
    if (!txtarea) {
        return;
    }

    var front = txtarea.value.substring(0, txtarea.selectionStart);
    var back = txtarea.value.substring(txtarea.selectionEnd, txtarea.value.length);

    if (addspace && front.length && !front.match(/\s$/)) {
        text = ' ' + text;
    }

    txtarea.value = front + text + back;

    var strPos = (front + text).length;

    txtarea.selectionStart = strPos;
    txtarea.selectionEnd = strPos;
    txtarea.focus();

    var event = new Event('keyup');
    txtarea.dispatchEvent(event);
}

export default insertAtCaret;

