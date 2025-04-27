import { IoIosNotificationsOutline } from 'react-icons/io'
import { MdOutlineEdit } from 'react-icons/md'
import { GrTopCorner } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { TbLockCode } from 'react-icons/tb'
import { MdGroups } from 'react-icons/md'
import { MdOutlineUnsubscribe } from 'react-icons/md'
import { IoStatsChartOutline } from 'react-icons/io5'
import { MdOutlineNotificationsPaused } from 'react-icons/md'

function MenuPage() {
	return (
		<>
			<div className='w-full m-auto flex items-center py-[50px] justify-center h-auto bg-[#ebe9e9]'>
				<div className='w-[376px] max-[430px]:mx-[20px] max-[430px]:w-full m-auto bg-[#fff] p-[24px]'>
					<div className='w-full'>
						<div className='w-full items-end gap-0 mb-[20px] flex'>
							<GrTopCorner className='text-[35px] text-blue-500' />
							<Link>
								<p className='ml-[-10px] text-[18px] font-["Roboto"] font-semibold text-blue-500'>
									@wdlam
								</p>
							</Link>
						</div>
						<div className='flex items-center gap-[12px] relative'>
							<MdOutlineEdit className='cursor-pointer absolute top-0 right-0 text-[18px]' />
							<img
								className='w-[70px] h-[70px] rounded-[20px] bg-cover'
								src='users.png'
								alt='users photos'
							/>
							<div className=''>
								<span className='text-[18px] font-semibold font-["Roboto"] text-[rgba(26,26,26,1)]'>
									Zambarak
								</span>
								<p className='mt-[8px] text-[14px] font-normal font-["Roboto"] text-[rgba(153,153,153,1)]'>
									Kament yozib qo'yadi
								</p>
							</div>
						</div>
						<div className=''>
							<p className='mt-[25px] mb-[8px] text-[16px] font-medium font-["Roboto"] text-[rgba(26,26,26,1)]'>
								Account
							</p>
							<p className='text-[14px] font-medium font-["Roboto"] text-[rgba(26,26,26,1)]'>
								Zambarag
							</p>
							<p className=' text-[14px] font-normal font-["Roboto"] text-[rgba(153,153,153,1)]'>
								Soha/Kasb/Yo'nalish
							</p>
						</div>
						<div className='my-[20px] py-[10px] border-y border-[#cecdcd]'>
							<p className='text-[15px] font-["Roboto"] font-semibold text-[rgba(26,26,26,1)]'>
								@wdLam
							</p>
							<p className='mt-[3px] text-[15px] font-normal font-["Roboto"] text-[rgba(153,153,153,1)]'>
								Username
							</p>
						</div>
						<div className=''>
							<p className='text-[rgba(26,26,26,1)] leading-[120%] font-["Roboto"] font-medium text-[15px]'>
								Men Microsoft kompaniyasining katta frontend dasturchisiman
							</p>
							<p className='text-[14px] font-normal font-["Roboto"] text-[rgba(153,153,153,1)]'>
								Bio
							</p>
						</div>
						<div className=''>
							<h2 className='mt-[15px] font-["Roboto"] font-semibold text-[18px] text-[#494949]'>
								Sozlamalar
							</h2>
							<div className='group py-[5px] my-[8px] flex items-center gap-[20px] cursor-pointer'>
								<MdOutlineNotificationsPaused className='text-[25px]' />
								<p className='text-[15px] group-hover:text-[#60a5fa] font-medium font-["Roboto"] text-[rgba(26,26,26,1)]'>
									Bildirishnomalar
								</p>
							</div>
							<div className='group py-[5px] my-[8px] flex items-center gap-[20px] cursor-pointer'>
								<TbLockCode className='text-[25px]' />
								<p className='text-[15px] group-hover:text-[#60a5fa] font-medium font-["Roboto"] text-[rgba(26,26,26,1)]'>
									Hafsizlik
								</p>
							</div>
							<div className='group py-[5px] my-[8px] flex items-center gap-[20px] cursor-pointer'>
								<IoStatsChartOutline className='text-[25px]' />
								<p className='text-[15px] group-hover:text-[#60a5fa] font-medium font-["Roboto"] text-[rgba(26,26,26,1)]'>
									Statistika
								</p>
							</div>
							<div className='group py-[5px] my-[8px] flex items-center gap-[20px] cursor-pointer'>
								<MdGroups className='text-[25px]' />
								<p className='text-[15px] group-hover:text-[#60a5fa] font-medium font-["Roboto"] text-[rgba(26,26,26,1)]'>
									Gruhlarim
								</p>
							</div>
							<div className='group py-[5px] my-[8px] flex items-center gap-[20px] cursor-pointer'>
								<MdOutlineUnsubscribe className='text-[25px]' />
								<p className='text-[15px] group-hover:text-[#60a5fa] font-medium font-["Roboto"] text-[rgba(26,26,26,1)]'>
									Obunachilarim
								</p>
							</div>
							<Link>
								<p className='text-[15px] text-blue-500 font-["Roboto"] font-medium ml-[40px]'>
									Language
								</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default MenuPage
