// material ui 
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const NoData = () => {
  return (
    <div className='flex justify-center py-2'>
      <section className='flex gap-1'>
        <ErrorOutlineIcon sx={{color: 'red', fontSize: '1.7rem'}}/>
        <h1 className='text-medium font-medium' style={{alignSelf:'center'}}>No records found</h1>
      </section>
    </div>
  )
}

export default NoData
