import React, { useState, useContext } from 'react';
import styles from './SignIn.module.css';
import { UserContext } from '../../context/user/userContext';
import Title from '../../components/Title';
import Input from '../../components/Input';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../api/auth';

const SignIn = () => {
    const navigate = useNavigate();
    const { loginUser, setCurrentUser, lastDate, firstDate } =
        useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorStatus, setErrorStatus] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const onSubmitHandler = async (e) => {
        setErrorMessage('');
        setErrorStatus(false);
        e.preventDefault();
        await auth
            .login(
                JSON.stringify({
                    email,
                    password,
                    lastDate,
                    firstDate,
                }),
            )
            .then((res) => res.json())
            .then((result) => {
                localStorage.setItem('jwtToken', result.token);
                setCurrentUser(true);
                loginUser(result.user);
                navigate('/dashboard/wallets');
            })
            .catch((err) => {
                setErrorMessage(err);
                setErrorStatus(true);
                console.log(err);
            });
    };

    return (
        <div className={styles.signInContainer}>
            <div className={styles.signInRow}>
                <div className={styles.signInIconWrapper}>
                    <svg width='64' height='64' viewBox='0 0 64 64' fill='none'>
                        <g clipPath='url(#clip0_1272_12174)'>
                            <path
                                d='M32 1.18999V9.68999C32 9.68999 35.5 8.13999 39 9.68999C42.5 11.24 46 9.68999 46 9.68999V1.18999C46 1.18999 42.5 2.73999 39 1.18999C35.5 -0.360012 32 1.18999 32 1.18999Z'
                                fill='#FBCC88'
                            />
                            <path
                                d='M46 7.68999V9.68999C46 9.68999 42.5 11.24 39 9.68999C35.5 8.13999 32 9.68999 32 9.68999V7.68999C32 7.68999 35.5 6.13999 39 7.68999C42.5 9.23999 46 7.68999 46 7.68999Z'
                                fill='#5B8DC9'
                            />
                            <path
                                d='M11.61 31.47C13.423 27.5925 16.3044 24.3127 19.916 22.0153C23.5276 19.718 27.7196 18.4985 32 18.5C52.075 18.5 62.07 43 47.765 57.055C33.67 70.9 9.5 61 9.5 41'
                                fill='#B29DDF'
                            />
                            <path
                                d='M47.16 57.625C46.875 57.89 46.5751 58.125 46.2751 58.395C35.2751 54.465 22.235 47.105 12.84 39.81C12.7326 39.7264 12.6628 39.6037 12.6459 39.4686C12.6291 39.3336 12.6665 39.1974 12.75 39.09C12.8336 38.9826 12.9564 38.9127 13.0914 38.8959C13.2264 38.879 13.3626 38.9164 13.47 39C25.115 48.06 40.65 55.71 47.16 57.625Z'
                                fill='#949AAF'
                            />
                            <path
                                d='M39.865 62.085C25.245 67.545 9.5 56.735 9.5 41L9.63 40.42C10.2346 46.016 12.9146 51.1822 17.1412 54.8992C21.3679 58.6162 26.8342 60.6141 32.4616 60.4986C38.089 60.383 43.4687 58.1626 47.5393 54.2752C51.6098 50.3879 54.0756 45.1161 54.45 39.5C54.7738 44.3329 53.5294 49.1414 50.9017 53.2104C48.2739 57.2795 44.4032 60.3919 39.865 62.085Z'
                                fill='#777ACB'
                            />
                            <path
                                d='M31.5 22.5V0.5C31.5 0.367392 31.5527 0.240215 31.6464 0.146447C31.7402 0.0526784 31.8674 0 32 0C32.1326 0 32.2598 0.0526784 32.3536 0.146447C32.4473 0.240215 32.5 0.367392 32.5 0.5V22.5C32.5 22.6326 32.4473 22.7598 32.3536 22.8536C32.2598 22.9473 32.1326 23 32 23C31.8674 23 31.7402 22.9473 31.6464 22.8536C31.5527 22.7598 31.5 22.6326 31.5 22.5Z'
                                fill='#949AAF'
                            />
                            <path
                                d='M6.02502 32.445C6.11918 32.5418 6.17102 32.672 6.16914 32.8071C6.16727 32.9421 6.11183 33.0709 6.01502 33.165C5.91822 33.2592 5.78798 33.311 5.65295 33.3091C5.51793 33.3072 5.38918 33.2518 5.29502 33.155C2.18002 29.935 -1.19498 25.5 0.395025 22.755C1.98502 20.01 8.21503 20.255 17.45 23.505C17.5338 23.535 17.608 23.5868 17.665 23.655C17.385 23.89 17.11 24.125 16.845 24.375C2.62002 19.4 -4.49998 21.555 6.02502 32.445Z'
                                fill='#7AA8D7'
                            />
                            <path
                                d='M46.5551 58.5C34.4617 53.9557 23.1019 47.6584 12.8401 39.81C12.7854 39.7698 12.7395 39.7188 12.7051 39.6602C12.6708 39.6017 12.6488 39.5367 12.6403 39.4694C12.6319 39.402 12.6373 39.3336 12.6562 39.2684C12.675 39.2032 12.707 39.1425 12.7501 39.09C13.5401 38.09 14.3901 40.805 27.6851 48.475C35.9601 53.245 44.2351 56.765 47.1601 57.625C55.4851 60.535 61.4401 60.96 62.7251 58.735C64.0101 56.51 60.6551 51.57 54.0001 45.82C54.0801 45.4667 54.1501 45.1067 54.2101 44.74C54.2966 44.7587 54.3772 44.7982 54.4451 44.855C70.1401 58.3 65.8251 65.31 46.5551 58.5Z'
                                fill='#7AA8D7'
                            />
                            <path
                                d='M9.5 41C12.2614 41 14.5 38.7614 14.5 36C14.5 33.2386 12.2614 31 9.5 31C6.73858 31 4.5 33.2386 4.5 36C4.5 38.7614 6.73858 41 9.5 41Z'
                                fill='#FBCC88'
                            />
                            <path
                                d='M9.50004 41C8.75853 41.0002 8.02626 40.8354 7.35628 40.5176C6.68631 40.1998 6.0954 39.737 5.62636 39.1627C5.15733 38.5883 4.82191 37.9169 4.6444 37.1969C4.46689 36.477 4.45174 35.7265 4.60004 35C4.82956 36.1303 5.44277 37.1465 6.33579 37.8764C7.2288 38.6063 8.34669 39.005 9.50004 39.005C10.6534 39.005 11.7713 38.6063 12.6643 37.8764C13.5573 37.1465 14.1705 36.1303 14.4 35C14.5483 35.7265 14.5332 36.477 14.3557 37.1969C14.1782 37.9169 13.8428 38.5883 13.3737 39.1627C12.9047 39.737 12.3138 40.1998 11.6438 40.5176C10.9738 40.8354 10.2416 41.0002 9.50004 41Z'
                                fill='#F6B756'
                            />
                        </g>
                        <defs>
                            <clipPath id='clip0_1272_12174'>
                                <rect width='64' height='64' fill='white' />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className={styles.signInTitle}>
                    <Title tag={'h3'}>Welcome Back!</Title>
                    <p className={styles.signInDescription}>
                        Let’s build something greate
                    </p>
                </div>
                <form
                    onSubmit={(e) => {
                        onSubmitHandler(e);
                    }}
                >
                    <Input
                        labelName='E-mail or phone number'
                        inputPlaceholder='Email'
                        type='email'
                        name='email'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <Input
                        labelName='Password'
                        inputPlaceholder='Password'
                        type='password'
                        name='password'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <button className={styles.button} type='submit'>
                        Login
                    </button>
                    {errorStatus ? (
                        <div className={styles.error}>{errorMessage}</div>
                    ) : (
                        ''
                    )}
                </form>
                <div className={styles.forgotPassword}>
                    <p className={styles.linkForGetPassword}>
                        <Link to='/forgot-password'> Forgot password?</Link>
                    </p>
                </div>
                <div className={styles.socialWrapper}></div>
                <div className={styles.haveAccount}>
                    <p>
                        Don't have an account? <Link to='/signup'>Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
