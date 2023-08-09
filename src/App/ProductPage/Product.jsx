import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProducts } from '../../Store/Slices/Products'

const Product = () => {
    const dispatch = useDispatch()
    useEffect(()=>{dispatch(fetchProducts())},[dispatch])
    const {id} = useParams()
    const products = useSelector(state=>state.product)
    const findProductIdBasedOnRoute = products.data.find(item=>item.id == id)
    const {price,title,image} = findProductIdBasedOnRoute || {}
  return (
    <>
    <div className='mt-[64px] space-y-6'>
        <div className='lg:p-20 md:p-12 sm:p-4 space-y-4  grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
            <div className='space-y-4 flex items-center justify-start flex-col'>
            <div className='w-[400px] h-[400px] overflow-hidden flex items-center justify-center bg-gray-100 rounded-xl ring-1 ring-black/5'><img src={image} className='w-2/3 mix-blend-multiply h-2/w-2/3 object-cover' alt="" /> </div>
            <div className='grid grid-cols-5 gap-2'>
                {Array(5).fill(1).map((item,idx)=>{
                    return(
                        <div className='w-20 h-20 cursor-pointer overflow-hidden flex items-center justify-center bg-gray-100 rounded-xl ring-1 ring-black/5'><img src={image} className='w-2/3 mix-blend-multiply h-2/w-2/3 object-cover' alt="" /> </div>
                    )
                })}
            </div>
            </div>
            <div className='space-y-4'>
                <p>{title}</p>
                <p className='font-normal text-[12px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut deserunt quod praesentium cumque porro, facere culpa cupiditate voluptatum odio omnis, qui, fuga debitis sed nostrum in magni obcaecati labore laudantium nam placeat dolor tempora? Veritatis, architecto praesentium consequatur pariatur numquam, itaque voluptatibus natus doloribus nostrum impedit quaerat suscipit quod sed, inventore ullam autem vel aliquid nobis deleniti. Doloribus impedit placeat aliquid, sequi esse optio. Nemo vero sit quam natus quis nihil itaque ducimus maiores. Itaque exercitationem esse praesentium officia provident, eveniet cum, ut ratione sunt doloribus quaerat? Eveniet libero assumenda natus similique quam nemo quidem reiciendis iusto enim maxime itaque, cumque animi. Excepturi dolor blanditiis nostrum commodi sint repellendus culpa voluptas, facere fugit quam voluptate numquam est necessitatibus, odit exercitationem sit libero eum? Blanditiis culpa voluptas exercitationem explicabo veniam ex dolorum adipisci tenetur assumenda tempora deleniti odio nam, nobis quos provident molestiae maiores magni consequatur nesciunt velit quod totam ea asperiores repellendus. Ab alias consequuntur incidunt sit mollitia quos voluptatum neque ullam delectus rerum id perspiciatis expedita asperiores dolorum quas officiis natus, dignissimos, voluptas deleniti, nesciunt ex. Laboriosam animi nulla praesentium ratione adipisci corrupti debitis facilis consectetur eius totam, doloribus numquam, possimus incidunt veritatis vel assumenda, fugit soluta facere dignissimos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores blanditiis eaque iste officiis porro praesentium repellendus laborum impedit natus, quibusdam sit? Cum, aut iure? Cumque dicta debitis eligendi voluptas consequatur quas nostrum, explicabo consequuntur maxime eum quia at vel deleniti vitae natus neque voluptatibus quo voluptate illum velit tempore! Nam.</p>
                <p>Price : ${price}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product