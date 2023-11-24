import AdminLayout from '../AdminLayout';
import classNames from 'classnames/bind';
import styles from './AdminInfo.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

import images from '../../../assets/images';
import UserNameAdmin from '../../../components/layout/UserNameAdmin';
import PassWordAdmin from '../../../components/layout/PassWordAdmin';

const cx = classNames.bind(styles);
const id = localStorage.getItem('id');
export function AdminInfor() {
    const [user, setUser] = useState({});

    // const [address, setAddress] = useState([]);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    useEffect(() => {
        getUserById();
    }, []);
    const getUserById = async () => {
        const res = await axios.get(`http://localhost:8080/api/v1/user/profile?id=${id}`);
        if (res && res.data) {
            setUser(res.data[0]);
        }
    };

    // useEffect(() => {
    //     getAllAddress();
    // }, []);
    // const getAllAddress = async () => {
    //     const res = await axios.get(`http://localhost:8080/api/v1/address/getByUserID?id=${id}`);
    //     if (res && res.data) {
    //         console.log(res.data);
    //         setAddress(res.data);
    //     }
    // };
    return (
        <AdminLayout>
            <div>
                <div className={cx('mycontent')}>
                    <div className={cx('left')}>
                        <div className={cx('mybox')}>
                            <div className={cx('acc')}>account page</div>
                            <div className={cx('hello')}>
                                Hello, <span className={cx('uname')}>{user.username}</span>
                            </div>
                        </div>
                        <img className={cx('avatar')} src={images.avata}></img>
                        <div className={cx('name')}>{user.username}</div>
                    </div>
                    <div className={cx('right')}>
                        <div className={cx('acc-info')}>ACCOUNT INFORMATION</div>
                        <div className={cx('myrow')}>
                            <span className={cx('title')}>User Name</span>
                            <span className={cx('des')}>{user.username}</span>
                            <UserNameAdmin />
                        </div>
                        <div className={cx('myrow')}>
                            <span className={cx('title')}>Email</span>
                            <span className={cx('des')}>{user.email}</span>
                        </div>
                        <div className={cx('myrow')}>
                            <span className={cx('title')}>Phone</span>
                            <span className={cx('des')}>{user.phone}</span>
                        </div>
                        <div className={cx('myrow')}>
                            <span className={cx('title')}>PassWord</span>
                            <span className={cx('des')}>********</span>
                            <PassWordAdmin />
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
