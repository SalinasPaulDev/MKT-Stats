import Logo from '/logo.svg'


export const Header = () => {
  return (
    <div className="w-full bg-white flex items-center justify-center">
    <div className='w-10'>
        <img src={Logo} />
    </div>
    <p className="p-4 font-semibold text-xl">Brand Therapy</p>
</div>
  )
}
