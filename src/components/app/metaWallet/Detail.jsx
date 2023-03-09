import React, { Fragment, useEffect, useState } from 'react'
import Header from './Header'
import User from '../../../assets/user.png'
import { useNavigate, useParams } from 'react-router-dom';
import {BsGear, BsPen} from 'react-icons/bs';
import {GrFormClose} from 'react-icons/gr';

export default function Detail() {

    const { slug } = useParams()
    const navigate = useNavigate();
    const [showWithdrawForm, setShowWithdrawForm] = useState(false);
    const [showTopupForm, setShowTopupForm] = useState(false);
    const [showSettingOption, setShowSettingOption] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [card, setCard] = useState([]);
    const [value, setValue] = useState(0);
    const [cards, setCards] = useState([{
        name: '',
        place: '',
        count: 0,
    }]);
    const [colors, setColors] = useState({
        name: '', 
        color1: '',
        color2: '',
    })
    const [item, setItem] = useState([]);

    useEffect(() => {
        // get DB
        const items = JSON.parse(localStorage.getItem('Database'));

        const c = items.filter((c) => c.name == slug);
        setCard(c);

        setItem(items);

    }, [])

    const getColorHandler = (event) => {
        const inputForm = { ...colors };
        inputForm[event.target.name] = event.target.value;

        setColors({
            name: card[0].name,
            place: card[0].place,
            color1: inputForm.color1,
            color2: inputForm.color2,
            count: card[0].count,
        })
    }

    const saveColorHandler = () => {
        localStorage.setItem('Colors', JSON.stringify(card));

        const items = JSON.parse(localStorage.getItem('Database'));

        const item = items.filter((c) => c.name !== slug);

        item.push(colors);

        localStorage.setItem('Database', JSON.stringify(item));

        setShowSettingOption(false)

        navigate(`/app/meta-wallet`);
    }

    const modifNumber = (number) => {
        return number
            .toString()
            .replace(
                /\B(?=(\d{3})+(?!\d))/g, "."
            );
    }

    const onSaveEditedHandler = () => {
        
        const wallet = item.filter((i) => i.name == slug);
        const walletInstead = item.filter((i) => i.name !== slug);

        wallet[0].name = cards.name;
        wallet[0].place = cards.place;

        wallet.forEach((w) => {
            walletInstead.push(w);
        })

        localStorage.setItem('Database', JSON.stringify(walletInstead));

        navigate(`/app/meta-wallet`);
    }

    const getValue = (event) => {
        const inputForm = { ...cards };
        inputForm[event.target.id] = event.target.value;

        setValue(inputForm.count)
    }

    const editGetValue = (event) => {
        const inputForm = { ...cards };
        inputForm[event.target.name] = event.target.value;

        setCards({
            name: inputForm.name,
            place: inputForm.place,
        })
    }

    const deleteWalletHandler = () => {

        alert('Are you sure?')

        const wallet = item.filter((i) => i.name !== slug);

        localStorage.setItem('Database', JSON.stringify(wallet));

        navigate('/app/meta-wallet');
    }

    const topupHandler = (event) => {
        const c = item.filter((c) => c.name == slug);

        c[0].count = c[0].count + parseInt(value);

        localStorage.setItem('Database', JSON.stringify(item));

        setShowTopupForm(false);
    }

    const withdrawHandler = (event) => {
        const c = item.filter((c) => c.name == slug);

        if (parseInt(value) > c[0].count) {
            alert('Your Wallet is Less!')
        } else {
            c[0].count = c[0].count - parseInt(value);
            localStorage.setItem('Database', JSON.stringify(item));
        }

        setShowWithdrawForm(false)
    }

    return (
        <Fragment>
            <Header />
            <main class="w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 m-auto my-[105px] font-inter border-slate-900 border-opacity-20">

                {/* setting */}
                <div className='flex justify-end -mt-5'>
                    <div className='border-2 rounded-full border-white shadow'>
                        <BsGear className='w-6 h-6 hover:cursor-pointer' onClick={() => setShowSettingOption(true)}/>
                    </div>
                </div>

                {/* <!-- header --> */}
                {card.map((c) => (
                    <section class="text-center font-semibold mb-10 mt-5">
                        <div class="mb-7"><span class="border rounded-full opacity-70 px-7 py-2 text-sm">{c.name}</span></div>
                        <div class="opacity-50 text-sm">Total Balance</div>
                        <div class="text-2xl mt-1">IDR {modifNumber(c.count)},00</div>

                        <div class="mt-3 flex items-center justify-center gap-2">
                            <button
                                class="w-20 flex items-center justify-center text-sm font-inter border px-4 py-1 rounded-full shadow hover:bg-red-500 hover:text-white" onClick={() => setShowWithdrawForm(true)}><span
                                    class="opacity-50 hover:opacity-100">Withdraw</span></button>
                            <button
                                class="w-20 flex items-center justify-center text-sm font-inter border px-4 py-1 rounded-full shadow hover:bg-sky-600 hover:text-white" onClick={() => setShowTopupForm(true)}><span
                                    class="opacity-50 hover:opacity-100">Top Up</span></button>
                        </div>
                    </section>))}

                {/* <!-- history --> */}
                <section class="sm:w-4/5 m-auto text-sm flex flex-col gap-4 mt-16">
                    <div class="flex justify-between font-semibold">
                        <div>Transaction History</div>
                        <div>See all</div>
                    </div>

                    <div class="flex justify-between items-center shadow rounded p-2">
                        <div class="flex items-center">
                            <div><img src={User} class="w-2/3" alt="" /></div>
                            <div class="flex flex-col gap-1">
                                <div>Food Magazine</div>
                                <div class="opacity-70 text-xs">Sat 23, 2023</div>
                            </div>
                        </div>
                        <div> <span class="font-bold text-green-500">+</span> IDR 50.000,00</div>
                    </div>
                    <div class="flex justify-between items-center shadow rounded p-2">
                        <div class="flex items-center">
                            <div><img src={User} class="w-2/3" alt="" /></div>
                            <div class="flex flex-col gap-1">
                                <div>Food Magazine</div>
                                <div class="opacity-70 text-xs">Sat 23, 2023</div>
                            </div>
                        </div>
                        <div> <span class="font-bold text-red-500">-</span> IDR 50.000,00</div>
                    </div>
                    <div class="flex justify-between items-center shadow rounded p-2">
                        <div class="flex items-center">
                            <div><img src={User} class="w-2/3" alt="" /></div>
                            <div class="flex flex-col gap-1">
                                <div>Food Magazine</div>
                                <div class="opacity-70 text-xs">Sat 23, 2023</div>
                            </div>
                        </div>
                        <div> <span class="font-bold text-green-500">+</span> IDR 50.000,00</div>
                    </div>
                </section>

                {/* withdraw form */}
                <section class={`w-full h-full fixed z-50 left-0 top-0 bg-slate-900 opacity-90 ${showWithdrawForm ? 'flex' : 'hidden'} items-center font-inter text-sm text-white`}>
                    <form action=""
                        onSubmit={() => withdrawHandler()}
                        class="bg-gradient-to-tr bg-slate-500 m-auto w-11/12 sm:w-2/3 md:w-1/2 lg:w-2/5 h-58 opacity-100 rounded-lg flex flex-col justify-center gap-4 p-7 shadow-2xl">
                        {/* <!-- form header --> */}
                        <div>
                            <h1 class="text-bold text-2xl mb-3">Withdraw here!</h1>
                        </div>
                        {/* <!-- wallet count --> */}
                        <div class="flex flex-col gap-1">
                            <label for="count">Wallet Count</label>
                            <input type="number" id="count" class="px-2 border h-9 rounded-lg text-black"
                                placeholder="Wallet Count" onChange={(event) => getValue(event)} required />
                        </div>
                        {/* <!-- button --> */}
                        <div class="ml-auto flex gap-2 mt-2">
                            <div
                                class="border rounded-lg w-20 shadow cursor-pointer h-9 flex items-center justify-center hover:bg-red-600" onClick={() => setShowWithdrawForm(false)}>
                                <span>Cancel</span>
                            </div>
                            <button
                                type='submit'
                                class="border rounded-lg w-20 shadow cursor-pointer h-9 flex items-center justify-center hover:bg-blue-600">
                                <span>Withdraw</span>
                            </button>
                        </div>
                    </form>
                </section>

                {/* topup form */}
                <section
                    class={`w-full h-full fixed z-50 left-0 top-0 bg-slate-900 opacity-90 ${showTopupForm ? 'flex' : 'hidden'} items-center font-inter text-sm text-white`}>
                    <form action=""
                        onSubmit={(event) => topupHandler(event)}
                        class="bg-gradient-to-tr bg-slate-500 m-auto w-11/12 sm:w-2/3 md:w-1/2 lg:w-2/5 h-58 opacity-100 rounded-lg flex flex-col justify-center gap-4 p-7 shadow-2xl">
                        {/* <!-- form header --> */}
                        <div>
                            <h1 class="text-bold text-2xl mb-3">Top Up here!</h1>
                        </div>
                        {/* <!-- wallet count --> */}
                        <div class="flex flex-col gap-1">
                            <label for="count">Wallet Count</label>
                            <input type="number" id="count" class="px-2 border h-9 rounded-lg text-black"
                                placeholder="Wallet Count" onChange={(event) => getValue(event)} required />
                        </div>
                        {/* <!-- button --> */}
                        <div class="ml-auto flex gap-2 mt-2">
                            <div
                                class="border rounded-lg w-20 shadow cursor-pointer h-9 flex items-center justify-center hover:bg-red-600" onClick={() => setShowTopupForm(false)}>
                                <span>Cancel</span>
                            </div>
                            <button
                                type='submit'
                                class="border rounded-lg w-20 shadow cursor-pointer h-9 flex items-center justify-center hover:bg-blue-600">
                                <span>Top Up</span>
                            </button>
                        </div>
                    </form>
                </section>

                {/* setting element */}
                <section class={`w-full h-full fixed z-50 left-0 top-0 bg-slate-900 opacity-90 ${showSettingOption ? 'flex' : 'hidden'} items-center font-inter text-sm text-white`}>
                    <div class={`bg-gradient-to-tr bg-slate-500 m-auto w-11/12 sm:w-2/3 md:w-1/2 lg:w-2/5 h-58 opacity-100 rounded-lg flex flex-col justify-center gap-4 p-7 shadow-2xl relative`}>
                        <h1 className='text-2xl'>Appearance</h1>

                        <GrFormClose 
                            className='text-white text-3xl absolute right-2 top-2 cursor-pointer'
                            onClick={() => {
                                setColors(card)

                                setShowSettingOption(false)
                            }}/>

                        <div className='flex flex-col gap-4 mt-3'>
                            {/* name */}
                            <div className='flex items-center gap-1'>
                                {card.map((c) => (<div className='text-sm font-semibold'>{c.name}</div>))}
                                <BsPen className='cursor-pointer hover:text-blue-300'
                                    onClick={() => {
                                        setShowEditForm(true) 
                                        setShowSettingOption(false)

                                        // start value
                                        setCards({
                                            name: card[0].name,
                                            place: card[0].place,
                                        })

                                    }}/>
                            </div>

                            {/* gradient color */}
                            <div>
                                <div className='text-sm font-semibold'>Gradient Color</div>
                                <div className='flex justify-between gap-4 mt-2'>
                                    <input type="color" name='color1' value={card.map((c) => c.color1)} className='w-full bg-slate-500 h-9 rounded-lg cursor-pointer' onChange={(event) => getColorHandler(event)}/>
                                    <input type="color" name='color2' value={card.map((c) => c.color2)} onChange={(event) => getColorHandler(event)} className='w-full bg-slate-500 h-9 rounded-lg cursor-pointer'/>
                                </div>
                            </div>
                            {/* Pin */}
                            <div className='flex flex-col gap-1 text-sm font-semibold'>
                                <div className='flex gap-1 items-center'>
                                    <div>Pin</div>
                                    <BsPen className='cursor-pointer hover:text-blue-300'/>
                                </div>
                                <div className='font-mono'>* * * * * *</div>
                            </div>
                            <div className='flex justify-between text-center gap-4'>
                                <div className='border border-white w-full p-2 rounded-lg  hover:cursor-pointer hover:bg-blue-500'
                                onClick={() => saveColorHandler()}>Save</div>
                                <div className='border border-white w-full p-2 rounded-lg  hover:cursor-pointer hover:bg-red-500'
                                onClick={() => deleteWalletHandler()}>Delete</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Edit */}
                <section class={`w-full h-full fixed z-50 left-0 top-0 bg-slate-900 opacity-90 flex items-center font-inter text-sm text-white ${showEditForm ? 'flex' : 'hidden'}`}>
                    <div class={`bg-gradient-to-tr bg-slate-500 m-auto w-11/12 sm:w-2/3 md:w-1/2 lg:w-2/5 h-58 opacity-100 rounded-lg flex flex-col justify-center gap-4 p-7 shadow-2xl relative`}>
                        <h1 className='text-2xl'>Wallet Update <span className='font-bold underline'>Here!</span></h1>

                        <GrFormClose 
                            className='text-white text-3xl absolute right-2 top-2 cursor-pointer'
                            onClick={() => setShowEditForm(false)}/>

                        <div className='flex flex-col gap-4 mt-3'>
                            <div class="flex flex-col gap-1">
                                <label for="count">Wallet Name</label>
                                <input type="text" id='name' name='name' class="px-2 border h-9 rounded-lg text-black" placeholder="Wallet Count"
                                value={cards.name}
                                required 
                                onChange={(event) => editGetValue(event)} />
                            </div>
                            <div class="flex flex-col gap-1">
                                <label for="count">Wallet Place</label>
                                <select name="place" id="place" class="px-1 border h-9 rounded-lg text-black text-opacity-60"
                                value={cards.place}
                                onChange={(event) => editGetValue(event)}
                                required>
                                    <option selected>Select Place Wallet</option>
                                    <option value="cash">CASH</option>
                                    <option value="bri">BRI</option>
                                    <option value="bni">BNI</option>
                                    <option value="bca">BCA</option>
                                    <option value="crypto">CRYPTO</option>
                                    <option value="dana">DANA</option>
                                    <option value="gopay">GOPAY</option>
                                    <option value="linkaja">LINK AJA</option>
                                    <option value="opo">OPO</option>
                                </select>
                            </div>
                            <div className='flex justify-between text-center gap-4 mt-3'>
                                <div className='border border-white w-full p-2 rounded-lg  hover:cursor-pointer hover:bg-blue-500' 
                                onClick={() => onSaveEditedHandler()}>Save</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* <Footer /> */}
        </Fragment >
    )
}
