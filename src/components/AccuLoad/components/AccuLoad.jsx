import React, { useState, useEffect } from "react";
import { DisplayWelcome } from "./DisplayWelcome";
import { InputData } from "./InputData";
import { HourDisplay } from './HourDisplay'
import { Button } from './Button'
import { ProductInfo } from "./ProductInfo";
import { Operation } from "./Operation";
import { ErrorMessage } from "./ErrorMessage";
import { UserLoggedIn } from "./UserLoggedIn";
import { VolCompletarInfo } from "./VolCompletarInfo";
import { VolAcimaTol } from "./VolAcimaTol";
import { Contador } from "./Contador";
import { Concluido } from "./Concluido";
import { OperationCompletar } from "./OperationCompletar";

const SCREENS = {
    HOME_SCREEN: 0,
    USER_SCREEN: 1,
    PASSWORD_SCREEN: 2,
    PRODUCT_INFO_SCREEN: 3,
    OPERATION_SCREEN: 4,
    USER_ERROR_SCREEN: 5,
    PASS_ERROR_SCREEN: 6,
    CONFIRM_USER_SCREEN: 7,
    COMPLETE_PASSWORD_SCREEN: 8,
    COMPLETE_VOL_SCREEN: 9,
    SCREEN_COMPLETE_OK: 10,
    SCREEN_COMPLETE_PASSWORD_ERROR: 11,
    SCREEN_COMPLETE_VOL_ERROR: 12,
    COMPLETE_OPERATION_SCREEN: 13,
    SCREEN_VOL_UP_TOL: 14,
    COUNTER_SCREEN: 15,
    INSPECTION_SCREEN: 16,
    INSPECTION_SCREEN_ERROR: 17,
    SCREEN_COMPLETE_NC: 18
}

export function AccuLoad() {
    const [num, setNum] = useState('');
    const [currentScreen, setCurrentScreen] = useState(SCREENS.HOME_SCREEN);
    const [errorMessage, setErrorMessage] = useState('');
    const [userLoggedIn, setUserLoggedIn] = useState('');
    const [operationInfo, setOperationInfo] = useState('');

    const [users, setUsers] = useState(
        [
            { id: 1, name: 'User1' },
            { id: 2, name: 'User2' },
            { id: 3, name: 'User3' },
            { id: 4, name: 'User4' },
            { id: 5, name: 'User5' }
        ]
    );

    const [pass, setPass] = useState(
        [
            { id: 1, product: "Gasolina 'A'", company: 'Terminal 01', vol: '30', flow: '1800' },
            { id: 2, product: "Gasolina 'C'", company: 'Terminal 01', vol: '1000', flow: '2000' },
            { id: 3, product: "Etanol Hidratado", company: 'Terminal 01', vol: '50', flow: '1800' },
            { id: 4, product: "Diesel 'A' S10", company: 'Terminal 01', vol: '30', flow: '1800' },
            { id: 5, product: "Diesel 'B' S10", company: 'Terminal 01', vol: '50', flow: '2000' },
            { id: 6, product: "Diesel 'A' S500", company: 'Terminal 01', vol: '30', flow: '1800' },
            { id: 7, product: "Diesel 'B' S500", company: 'Terminal 01', vol: '50', flow: '2000' },
            { id: 8, product: "Biodiesel", company: 'Terminal 01', vol: '20', flow: '800' },
            { id: 9, product: "Etanol Anidro", company: 'Terminal 01', vol: '20', flow: '800' }
        ]
    );

    const [oc, setOc] = useState(
        [
            { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }, { id: 14 }, { id: 15 }, { id: 16 }, { id: 17 }, { id: 18 }, { id: 19 }, { id: 20 }, { id: 21 }, { id: 22 }, { id: 23 }, { id: 24 }, { id: 25 }, { id: 26 }, { id: 27 }, { id: 28 }, { id: 29 }, { id: 30 }, { id: 31 }, { id: 32 }, { id: 33 }, { id: 34 }, { id: 35 }, { id: 36 }, { id: 37 }, { id: 38 }, { id: 39 }, { id: 40 }, { id: 41 }, { id: 42 }, { id: 43 }, { id: 44 }, { id: 45 }, { id: 46 }, { id: 47 }, { id: 48 }, { id: 49 }, { id: 50 }
        ]
    )

    function insertNumber(e) {
        // if (currentScreen !== SCREENS.USER_SCREEN) return;
        // if (currentScreen !== SCREENS.PASSWORD_SCREEN) return;

        if (currentScreen === SCREENS.HOME_SCREEN) return;
        if (currentScreen === SCREENS.PRODUCT_INFO_SCREEN) return;
        if (currentScreen === SCREENS.PASS_ERROR_SCREEN) return;
        if (currentScreen === SCREENS.USER_ERROR_SCREEN) return;
        if (currentScreen === SCREENS.CONFIRM_USER_SCREEN) return;
        if (currentScreen === SCREENS.OPERATION_SCREEN) return;

        var insert = e.target.value;
        setNum((previousValue) => {
            if (!previousValue && Number(insert) === 0) {
                return '';
            }
            if (!previousValue && Number(insert) > 0) {
                return insert;
            }
            return previousValue + insert;
        });
    };

    function clean() {
        /* if (currentScreen === SCREENS.USER_ERROR_SCREEN) {
            setCurrentScreen(SCREENS.USER_SCREEN);
            setNum('')
        } else if (currentScreen === SCREENS.PASS_ERROR_SCREEN) {
            setCurrentScreen(SCREENS.PASSWORD_SCREEN);
            setNum('')
        } else { */
        if (!num) return;
        const previousText = num.substring(0, num.length - 1);
        setNum(previousText);
        // } 
    };

    function set() {
        if (currentScreen === SCREENS.HOME_SCREEN) setCurrentScreen(SCREENS.USER_SCREEN);
    }

    function validateUser() {
        if (!num) {
            setErrorMessage('Id por favor!')
            setCurrentScreen(SCREENS.USER_ERROR_SCREEN)
            setTimeout(() => {
                setCurrentScreen(SCREENS.USER_SCREEN)
            }, 2000)
            return;
        }
        const userFound = users.find((user) => user.id === Number(num));
        setNum('');
        if (!userFound) {
            setErrorMessage('Id não cadastrado!')
            setCurrentScreen(SCREENS.USER_ERROR_SCREEN)
            setTimeout(() => {
                setCurrentScreen(SCREENS.USER_SCREEN)
            }, 2000)
            return;
        }
        setUserLoggedIn(userFound.name)
        setCurrentScreen(SCREENS.CONFIRM_USER_SCREEN)
        setTimeout(() => {
            setCurrentScreen(SCREENS.PASSWORD_SCREEN)
        }, 2000)
    }

    function validatePassword() {
        if (!num) {
            setErrorMessage('Senha por favor!')
            setCurrentScreen(SCREENS.PASS_ERROR_SCREEN)
            setTimeout(() => {
                setCurrentScreen(SCREENS.PASSWORD_SCREEN)
            }, 2000)
            return;
        }
        const passwordFound = pass.find((pass) => pass.id === Number(num));
        setNum('');
        if (!passwordFound) {
            setErrorMessage('Senha não cadastrada!');
            setCurrentScreen(SCREENS.PASS_ERROR_SCREEN)
            setTimeout(() => {
                setCurrentScreen(SCREENS.PASSWORD_SCREEN)
            }, 2000)
            return;
        }
        setOperationInfo(passwordFound)
        setCurrentScreen(SCREENS.PRODUCT_INFO_SCREEN)
        setTimeout(() => {
            setCurrentScreen(SCREENS.OPERATION_SCREEN)
        }, 3000)
    }

    function enter() {
        if (currentScreen === SCREENS.USER_SCREEN) {
            validateUser();
        } else if (currentScreen === SCREENS.PASSWORD_SCREEN) {
            validatePassword();
        } else if (currentScreen === SCREENS.PRODUCT_INFO_SCREEN) {
            setCurrentScreen(SCREENS.OPERATION_SCREEN);
        } else if (currentScreen === SCREENS.COMPLETE_PASSWORD_SCREEN) {
            if (!num) {
                setErrorMessage('Senha por favor!')
                setCurrentScreen(SCREENS.SCREEN_COMPLETE_PASSWORD_ERROR)
                setTimeout(() => {
                    setCurrentScreen(SCREENS.COMPLETE_PASSWORD_SCREEN)
                }, 2000)
                return;
            }
            const passwordFound = pass.find((pass) => pass.id === Number(num));
            setNum('');
            if (!passwordFound) {
                setErrorMessage('Senha não cadastrada!');
                setCurrentScreen(SCREENS.SCREEN_COMPLETE_PASSWORD_ERROR)
                setTimeout(() => {
                    setCurrentScreen(SCREENS.COMPLETE_PASSWORD_SCREEN)
                }, 2000)
                return;
            }
            setOperationInfo(passwordFound)
            setCurrentScreen(SCREENS.COMPLETE_VOL_SCREEN);
        } else if (currentScreen === SCREENS.COMPLETE_VOL_SCREEN) {
            if (!num) {
                setErrorMessage('Volume por favor!')
                setCurrentScreen(SCREENS.SCREEN_COMPLETE_VOL_ERROR)
                setTimeout(() => {
                    setCurrentScreen(SCREENS.COMPLETE_VOL_SCREEN)
                }, 2000)
                return;
            }
            const maxVolComp = operationInfo.vol * 0.005;
            if (num > maxVolComp) {
                setErrorMessage('Volume não permitido!')
                setCurrentScreen(SCREENS.SCREEN_VOL_UP_TOL)
                setTimeout(() => {
                    setCurrentScreen(SCREENS.COMPLETE_VOL_SCREEN)
                }, 2000)
                setNum('');
                return;
            }
            setCurrentScreen(SCREENS.COMPLETE_OPERATION_SCREEN);
        } else if (currentScreen === SCREENS.INSPECTION_SCREEN) {
            if (!num) {
                setErrorMessage('Número da OS por favor!')
                setCurrentScreen(SCREENS.INSPECTION_SCREEN_ERROR)
                setTimeout(() => {
                    setCurrentScreen(SCREENS.INSPECTION_SCREEN)
                }, 2000)
                return;
            }
            const ocFound = oc.find((oc) => oc.id === Number(num));
            setNum('');
            if (!ocFound) {
                setErrorMessage('OS não encontrada!');
                setCurrentScreen(SCREENS.INSPECTION_SCREEN_ERROR)
                setTimeout(() => {
                    setCurrentScreen(SCREENS.INSPECTION_SCREEN)
                }, 2000)
                return;
            }
            setOperationInfo(ocFound)
            if (ocFound.id % 10 === 0) {
                setCurrentScreen(SCREENS.SCREEN_COMPLETE_OK)
            } else setCurrentScreen(SCREENS.SCREEN_COMPLETE_NC)
        }
    }

    function print() {
        if (currentScreen === SCREENS.OPERATION_SCREEN || currentScreen === SCREENS.PASSWORD_SCREEN || currentScreen === SCREENS.COMPLETE_PASSWORD_SCREEN || currentScreen === SCREENS.COMPLETE_OPERATION_SCREEN || currentScreen === SCREENS.INSPECTION_SCREEN || currentScreen === SCREENS.SCREEN_COMPLETE_OK || currentScreen === SCREENS.SCREEN_COMPLETE_NC || currentScreen === SCREENS.COMPLETE_VOL_SCREEN) {
            setCurrentScreen(SCREENS.USER_SCREEN);
            setNum('');
        } else if (currentScreen === SCREENS.USER_SCREEN) {
            setCurrentScreen(SCREENS.HOME_SCREEN);
            setNum('')
        }
    }

    function buttonF1() {
        setNum();
        if (currentScreen === SCREENS.PASSWORD_SCREEN || currentScreen === SCREENS.INSPECTION_SCREEN) setCurrentScreen(SCREENS.COMPLETE_PASSWORD_SCREEN);
    };

    function buttonF2() {
        setNum();
        if (currentScreen === SCREENS.PASSWORD_SCREEN || currentScreen === SCREENS.COMPLETE_PASSWORD_SCREEN) setCurrentScreen(SCREENS.INSPECTION_SCREEN);
    };

    function buttonStart() {
        if (currentScreen === SCREENS.HOME_SCREEN) setCurrentScreen(SCREENS.COUNTER_SCREEN);
    };

    return (
        <div className="accuload">
            <div className="tela">
                <div className="display">

                    {currentScreen === SCREENS.HOME_SCREEN && <DisplayWelcome />}

                    {currentScreen === SCREENS.USER_SCREEN && (
                        <InputData 
                            title="Usuário" 
                            value={num} 
                        />
                    )}

                    {currentScreen === SCREENS.CONFIRM_USER_SCREEN && (
                        <UserLoggedIn 
                            title="Usuário" 
                            value={userLoggedIn} 
                        />
                    )}

                    {currentScreen === SCREENS.PASSWORD_SCREEN && (
                        <InputData 
                            title="Senha" 
                            value={num} 
                        />
                    )}

                    {currentScreen === SCREENS.PRODUCT_INFO_SCREEN && (
                        <ProductInfo 
                            product={operationInfo.product} 
                            company={operationInfo.company} 
                            volume={operationInfo.vol} 
                        />
                    )}

                    {currentScreen === SCREENS.OPERATION_SCREEN && (
                        <Operation 
                            value={operationInfo.vol} 
                            product={operationInfo.product} 
                            vol={operationInfo.vol} 
                            flow={operationInfo.flow} 
                        />
                    )}

                    {currentScreen === SCREENS.COMPLETE_OPERATION_SCREEN && (
                        <OperationCompletar 
                            value={num} 
                            product={operationInfo.product} 
                            flow={operationInfo.flow} 
                            operationFinished={() => {
                                setNum('')
                            }} 
                        />
                    )}

                    {currentScreen === SCREENS.USER_ERROR_SCREEN && (
                        <ErrorMessage 
                            title="Ops!!!" 
                            value={errorMessage} 
                        />
                    )}

                    {currentScreen === SCREENS.PASS_ERROR_SCREEN && (
                        <ErrorMessage 
                            title="Ops!!!" 
                            value={errorMessage} 
                        />
                    )}

                    {currentScreen === SCREENS.COMPLETE_PASSWORD_SCREEN && (
                        <InputData 
                            title="Senha - completar" 
                            value={num} 
                        />
                    )}

                    {currentScreen === SCREENS.INSPECTION_SCREEN && (
                        <InputData 
                            title="Número da OS:" 
                            value={num} 
                        />
                    )}

                    {currentScreen === SCREENS.INSPECTION_SCREEN_ERROR && (
                        <ErrorMessage 
                            title="Ops!!!" 
                            value={errorMessage} 
                        />
                    )}
                    {currentScreen === SCREENS.COMPLETE_VOL_SCREEN && (
                        <VolCompletarInfo 
                            title={operationInfo.vol * 0.005} 
                            value={num} 
                        />
                    )}

                    {currentScreen === SCREENS.SCREEN_COMPLETE_PASSWORD_ERROR && (
                        <ErrorMessage 
                            title="Ops!!!" 
                            value={errorMessage} 
                        />
                    )}

                    {currentScreen === SCREENS.SCREEN_COMPLETE_VOL_ERROR && (
                        <ErrorMessage 
                            title="Ops!!!" 
                            value={errorMessage} 
                        />
                    )}

                    {currentScreen === SCREENS.SCREEN_VOL_UP_TOL && (
                        <VolAcimaTol 
                            title={operationInfo.vol * 0.005} 
                            value={errorMessage} 
                        />
                    )}
                    
                    {currentScreen === SCREENS.COUNTER_SCREEN && <Contador />}

                    {currentScreen === SCREENS.SCREEN_COMPLETE_OK && (
                        <Concluido 
                            title='Boa viagem!' 
                        />
                    )}

                    {currentScreen === SCREENS.SCREEN_COMPLETE_NC && (
                        <Concluido 
                            title='Inspeção!' 
                        />
                    )}

                    <HourDisplay />
                    
                </div>
            </div>
            <div className="teclado">
                <div className="teclado--linha">
                    <Button text="1" value={1} onPressed={insertNumber} />
                    <Button text="2" value={2} onPressed={insertNumber} />
                    <Button text="3" value={3} onPressed={insertNumber} />
                    <Button text="F1" onPressed={buttonF1} />
                    <Button text="F2" onPressed={buttonF2} />
                </div>
                <div className="teclado--linha">
                    <Button text="4" value={4} onPressed={insertNumber} />
                    <Button text="5" value={5} onPressed={insertNumber} />
                    <Button text="6" value={6} onPressed={insertNumber} />
                    <Button text="Set" onPressed={set} />
                    <Button text="Print" onPressed={print} />
                </div>
                <div className="teclado--linha">
                    <Button text="7" value={7} onPressed={insertNumber} />
                    <Button text="8" value={8} onPressed={insertNumber} />
                    <Button text="9" value={9} onPressed={insertNumber} />
                    <Button text="Clear" onPressed={clean} />
                    <Button text="Start" onPressed={buttonStart} />
                </div>
                <div className="teclado--linha">
                    <Button text="+/-" />
                    <Button text="0" value={0} onPressed={insertNumber} />
                    <Button text="." />
                    <Button text="Enter" onPressed={enter} />
                    <Button text="Stop" />
                </div>
            </div>
        </div>
    );
}









// function ButtonStop() {
//     return console.log('STOP button pressed!')
// };