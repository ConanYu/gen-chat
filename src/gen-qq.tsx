import React from 'react';
import {Avatar, Layout} from "@douyinfe/semi-ui";

type QQChatParam = {
    avatar?: string,
    name?: string,
    message?: string,
};

export default function QQChat(params: QQChatParam): JSX.Element {
    const {Header, Footer, Sider, Content} = Layout;
    const {avatar, name, message} = params;
    const ChatAvatar = () => {
        if (avatar) {
            return (
                <Avatar
                    size="extra-large"
                    style={{margin: 4}}
                    src={avatar}
                />
            );
        }
        return (
            <Avatar
                size="extra-large"
                style={{margin: 4}}
            >
                ?
            </Avatar>
        );
    };
    return (
        <div style={{
            backgroundColor: 'rgb(245, 245, 245)',
            padding: '30px 15px',
            width: '1006px',
        }}>
            <Layout>
                <Sider>
                    <ChatAvatar/>
                </Sider>
                <Content>
                    <span style={{
                        margin: '30px',
                        fontSize: '30px',
                        fontWeight: '300',
                    }}>
                        {name}
                    </span>
                    <div style={{
                        margin: '30px 10px 10px 10px',
                    }}>
                        <div style={{
                            backgroundColor: 'rgb(255, 255, 255)',
                            borderRadius: '30px',
                            display: 'table-cell',
                            padding: '20px 40px 30px 40px',
                        }}>
                            <div style={{
                                fontSize: '55px',
                                fontWeight: '400',
                            }}>
                                {message}
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </div>
    );
}
