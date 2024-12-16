import CounterTag from './CounterTag';
function Counter(){
	return(
		<>
	<div className='flex flex-wrap justify-between md:justify-center' style={{padding:"1000px 0 30px"}}>
		<CounterTag target={150} title='Customer' duration={1} />
		<CounterTag target={20000} title='Rooms' duration={2} />
		<CounterTag target={40000} title='Places' duration={3} />
		<CounterTag target={1200000} title='Users' duration={4} />
	</div>
	</>
	)
	};
export default Counter;