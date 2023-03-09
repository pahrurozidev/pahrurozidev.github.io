import React, { Fragment, useEffect, useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import Id from '../../../assets/Id.png'
import { Link } from 'react-router-dom';

export default function Index() {
  const [showFormAdd, setShowFormAdd] = useState(false);
  const [cards, setCards] = useState([]);
  const [card, setcard] = useState([]);
  const [formValue, setFormValue] = useState({
    name: '',
    place: '',
    color1: '',
    color2: '',
    count: 0,
  });
  const [colors, setColors] = useState({
    color1: '',
    color2: '',
  })

  const modifNumber = (number) => {
    return number
      .toString()
      .replace(
        /\B(?=(\d{3})+(?!\d))/g, "."
      );
  }

  const getValue = (event) => {
    const inputForm = { ...formValue };
    inputForm[event.target.id] = event.target.value;

    setFormValue({
      name: inputForm.name,
      color1: "#654e4e",
      color2: "#877373",
      place: inputForm.place.toUpperCase(),
      count: 0,
    })

  }

  const onSubmitHandler = (event) => {
    cards.push(formValue)

    // set DB
    localStorage.setItem('Database', JSON.stringify(cards));

    // get DB
    const items = JSON.parse(localStorage.getItem('Database'));
    if (items) {
      setCards(items);
    }

    setShowFormAdd(false)
  }

  useEffect(() => {
    // get DB
    const items = JSON.parse(localStorage.getItem('Database'));
    if (items) {
      setCards(items);
    }
  }, []);

  const totalCount = () => {
    let total = 0;

    for (let i = 0; i < cards.length; i++) {
      total = total + cards[i].count;
    }

    return total;
  }

  return (
    <Fragment>
      <Header />
      <main class="w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 m-auto my-[105px] font-inter border-slate-900 border-opacity-20">

        {/* header */}
        <section class="text-center font-semibold mb-10">
          <div class="opacity-50 text-sm">Total Balance</div>
          <div class="text-2xl mt-1">IDR {modifNumber(totalCount())},00</div>

          <div class="mt-3">
            <button
              class="text-sm font-inter border px-4 py-1 rounded-full shadow hover:bg-sky-600 hover:text-white"
              onClick={() => setShowFormAdd(true)} ><span
                class="opacity-50 hover:opacity-100">Add
                Card</span></button>
          </div>
        </section>

        {/* card */}
        <section class="grid sm:grid-cols-2 gap-4 text-xs">
          {cards.map((card) => (
            <Link to={`/app/meta-wallet/${card.name}`}
              className={`h-36 flex justify-between p-5 text-white rounded-lg cursor-pointer hover:border relative`} 
              style={{backgroundImage: `linear-gradient(to right, ${card.color1}, ${card.color2})`}}>
              <div class="flex flex-col justify-between">
                <div>
                  <p class="opacity-50 font-bold">Current Asset</p>
                  <h1 class="text-lg text-[14px] font-bold">IDR {modifNumber(card.count)},00</h1>
                </div>
                <div className='text-sm font-mono font-semibold'>
                  <p>4937 5893 4579 8347</p>
                  <p class="opacity-50">Your Business Card</p>
                </div>
              </div>

              <div class="flex flex-col justify-between relative text-sm font-bold font-inter text-end">
                <div class="opacity-80">
                  <p class="text-sm">{card.name}</p>
                  <p class="text-sm text-[12px]">{card.place}</p>
                </div>
                <div class="flex justify-end">
                  <img src={Id} class="rounded-lg w-10 h-7 shadow" alt="" />
                </div>
              </div>
            </Link>))}
        </section>

        {/* add card form */}
        <section
          class={`w-full h-full fixed z-50 left-0 top-0 bg-slate-900 opacity-90 ${showFormAdd ? 'flex' : 'hidden'} items-center font-inter text-sm text-white`}>
          <form action=""
            onSubmit={(event) => onSubmitHandler(event)}
            class="bg-gradient-to-tr bg-slate-500 m-auto w-11/12 sm:w-2/3 md:w-1/2 lg:w-2/5 h-58 opacity-100 rounded-lg flex flex-col justify-center gap-4 p-7 shadow-2xl">
            {/* <!-- form header --> */}
            <div>
              <h1 class="text-bold text-2xl mb-3">Insert Your <span class="underline">Wallet</span> Here!</h1>
            </div>
            {/* <!-- wallet name --> */}
            <div class="flex flex-col gap-1">
              <label for="name">Wallet Name</label>
              <input type="text" id="name" class="px-2 border h-9 rounded-lg text-black" value={formValue.name} placeholder='Wallet Name' required onChange={(event) => getValue(event)} />
            </div>
            {/* <!-- wallet place --> */}
            <div class="flex flex-col gap-1">
              <label for="place">Place Name</label>
              <select name="place" id="place" class="px-1 border h-9 rounded-lg text-black text-opacity-60" required onChange={(event) => getValue(event)}>
                <option selected>Select Place Wallet</option>
                <option value="cash">CASH</option>
                <option value="bri">BRI</option>
                <option value="atm">BNI</option>
                <option value="atm">BCA</option>
                <option value="crypto">CRYPTO</option>
                <option value="dana">DANA</option>
                <option value="gopay">GOPAY</option>
                <option value="linkaja">LINK AJA</option>
                <option value="opo">OPO</option>
              </select>
            </div>
            {/* <!-- button --> */}
            <div class="ml-auto flex gap-2 mt-2">
              <div
                class="border rounded-lg w-20 shadow cursor-pointer h-9 flex items-center justify-center hover:bg-red-600" onClick={() => setShowFormAdd(false)}>
                <span>Cancel</span>
              </div>
              <button
                type='submit'
                class="border rounded-lg w-20 shadow cursor-pointer h-9 flex items-center justify-center hover:bg-blue-600">
                <span>Save</span>
              </button>
            </div>
          </form>
        </section>
      </main>
      {/* <Footer /> */}
    </Fragment>
  )
}
