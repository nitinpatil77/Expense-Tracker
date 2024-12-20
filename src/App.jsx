
import './App.css'
import AddTransaction from './components/AddTransaction'
import Balance from './components/Balance'
import Header from './components/Header'
import IncomeExpense from './components/IncomeExpense'
import TransactionList from './components/TransactionList'


function App() {

  return (
    <>
      <div className="w-full h-screen px-4 bg-[#d0d3d6] flex justify-center items-center">
        <div className="container mx-auto">
          <div className="lg:w-1/3 mx-auto w-full">
            <Header />
            <Balance />
            <IncomeExpense />
            <TransactionList/>
            <AddTransaction/>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
