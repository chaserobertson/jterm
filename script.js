const terminal = document.getElementById('terminal');
const input = document.getElementById('input');

function handleCommand(cmd) {
  if (cmd.startsWith("echo ")) {
    return cmd.slice(5);
  }
  return `Command not found: ${cmd}`;
}

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const cmd = input.value;
    const output = handleCommand(cmd);
    terminal.innerText += `> ${cmd}\n${output}\n`;
    input.value = '';
    window.scrollTo(0, document.body.scrollHeight);
  }
});
