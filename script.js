 const editor = document.getElementById('editor');
    const filenameInput = document.getElementById('filename');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const preview = document.getElementById('preview');

    const savedCode = localStorage.getItem('savedCode');
    const savedFilename = localStorage.getItem('filename');
    if (savedCode) {
      editor.value = savedCode;
    }
    if (savedFilename) {
      filenameInput.value = savedFilename;
    }

    darkModeToggle.addEventListener('change', () => {
      document.body.classList.toggle('dark-mode');
    });

    function saveCode() {
      const codeToSave = editor.value;
      const filename = filenameInput.value;
      localStorage.setItem('savedCode', codeToSave);
      localStorage.setItem('filename', filename);
      alert('Code saved successfully!');
    }

    // Live preview
    editor.addEventListener('input', () => {
      preview.innerHTML = editor.value;
    });