// igRegisterScript�֐����g�p���āA�J�X�^���e���v���[�g��o�^
igRegisterScript("descriptionTemplate", (context) => {
    // �s�f�[�^���� Description �t�B�[���h�̒l���擾���܂�
    const description = context.cell.row.data.Description;
    // �V���� span �v�f���쐬���܂�
    const span = document.createElement("span");
    // �Z���̒l�� span �v�f�̃e�L�X�g�R���e���c�ɐݒ肵�܂�
    span.textContent = context.cell.value;
    // Description �t�B�[���h�̒l���c�[���`�b�v�Ƃ��Đݒ肵�܂�
    span.title = description;

    // span�v�f��Ԃ��܂�
    return span;
}, false);