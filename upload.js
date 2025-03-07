const OSS = require('ali-oss');

const client = new OSS({
  region: 'oss-cn-shanghai2',
  accessKeyId: 'LTAI5t8ngz5dGeLBuz5L4T2a',     // 替换为AccessKey ID
  accessKeySecret: '1mrXb0LwqJeqAAHa0FlN4EnrCt8UY0',    // 替换为AccessKey Secret
  bucket: 'wechatphoto-upload'
});

document.getElementById('file-input').addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  // 校验文件大小（50MB）
  if (file.size > 50 * 1024 * 1024) {
    alert('文件大小不能超过50MB！');
    return;
  }

  try {
    const result = await client.put(`{file.name}`, file);
    alert(`上传成功！文件URL：${result.url}`);
  } catch (err) {
    console.error('上传失败：', err);
    alert('上传失败，请重试！');
  }
});
