// Função principal chamada pelo botão "CONVERTER"
async function realizarConversao() {
    const file = inputArquivo.files[0];
    const aba = abaAtual; // Ex: 'video', 'imagem', 'pdf'
    const formato = obterFormatoSelecionado(aba); // Função que pega o valor do select
    
    if (!file) return alert("Selecione um arquivo primeiro!");

    btnConverter.innerText = "[ PROCESSANDO... ]";
    
    try {
        let blobDownload;

        if (aba === 'imagem') {
            blobDownload = await converterImagem(file, formato);
        } else if (aba === 'video') {
            blobDownload = await converterVideo(file, formato);
        } else if (aba === 'pdf') {
            blobDownload = await converterDocumento(file, formato);
        }

        // --- DISPARAR O DOWNLOAD ---
        const url = URL.createObjectURL(blobDownload);
        const a = document.createElement('a');
        a.href = url;
        a.download = `arquivo_convertido.${formato}`;
        document.body.appendChild(a);
        a.click(); // Download automático
        a.remove();
        
        btnConverter.innerText = "[ CONCLUÍDO! ]";
    } catch (e) {
        btnConverter.innerText = "[ ERRO ]";
        console.error(e);
    }
}

// 1. Lógica de Imagem (Canvas)
async function converterImagem(file, formato) {
    const img = await createImageBitmap(file);
    const canvas = document.createElement('canvas');
    canvas.width = img.width; canvas.height = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0);
    return new Promise(resolve => canvas.toBlob(resolve, `image/${formato}`));
}

// 2. Lógica de Vídeo (FFmpeg.wasm)
async function converterVideo(file, formato) {
    if (!ffmpeg.isLoaded()) await ffmpeg.load();
    ffmpeg.FS('writeFile', 'input', await fetchFile(file));
    await ffmpeg.run('-i', 'input', `output.${formato}`);
    const data = ffmpeg.FS('readFile', `output.${formato}`);
    return new Blob([data.buffer], { type: `video/${formato}` });
}

// 3. Lógica de Documentos (Simulação para Excel/Word)
async function converterDocumento(file, formato) {
    // Aqui você usaria o SheetJS para Excel ou similar
    // Retorna um Blob do arquivo processado
    return new Blob(["Conteúdo do documento convertido"], { type: "application/octet-stream" });
}