import React from 'react';
import QQChat from "./gen-qq";
import domtoimage from "dom-to-image";
import {Button, Input, Upload} from "@douyinfe/semi-ui";
import {IconUpload, IconDownload} from '@douyinfe/semi-icons';
const FileSaver = require('file-saver');

let graphDataUrl = '';

function App() {
    const [avatar, setAvatar] = React.useState('');
    const [name, setName] = React.useState('');
    const [message, setMessage] = React.useState('');
    setTimeout(() => {
        const node: any = document.getElementById('node');
        domtoimage.toPng(node)
            .then(function (dataUrl) {
                graphDataUrl = dataUrl;
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    }, 20);
    return (
        <>
            <div id="node">
                <QQChat avatar={avatar} name={name} message={message}/>
            </div>
            <div id="node-graph"/>
            <div style={{margin: '20px'}}>
                <Button icon={<IconUpload/>} theme="light" onClick={() => {
                    const dom = document.getElementById('input-upload-image');
                    if (dom) {
                        dom.click();
                    }
                }}>
                    上传头像
                </Button>
                <input type="file" id='input-upload-image' style={{display: 'none'}} onChange={(e) => {
                    const files = e.currentTarget.files;
                    if (files && files.length > 0) {
                        const file = files[0];
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = (e) => {
                            const r: any = e.currentTarget;
                            if (r.result) {
                                setAvatar(r.result);
                            }
                        };
                    }
                }} accept="image/*"/>
                <Input size='large' style={{
                    margin: '0 0 0 20px',
                    width: '300px',
                }} addonBefore="用户名" onChange={(name) => {
                    setName(name);
                }}/>
                <Input size='large' style={{
                    margin: '0 0 0 20px',
                    width: '300px',
                }} addonBefore="消息" onChange={(msg) => {
                    setMessage(msg);
                }}/>
                <Button icon={<IconDownload/>} theme="light" style={{
                    margin: '0 0 0 30px',
                }} onClick={() => {
                    if (graphDataUrl !== '') {
                        const now = Date.now();
                        FileSaver(graphDataUrl, `gen-chat-${now}.png`);
                    }
                }}>
                    保存为图片
                </Button>
            </div>
        </>
    );
}

export default App;
