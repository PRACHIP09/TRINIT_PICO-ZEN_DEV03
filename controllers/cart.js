const Cart = require('../models/cart.js');
const Product = require('../models/product.js');


exports.createCart=async (req, res) => {
    try {

    const product = await Product.findById(req.params.id)
    console.log(product)     
    const newCart = new Cart({

        
        buyer_id :req.user._id,
        product_id:req.params.id,
        desc:product.desc,
        far_id:product.far_id,
        far_name:product.far_name,
        far_phone:product.far_phone,
        far_add:product.far_add,
        far_email:product.far_email,
        cost:product.cost


        
    })


        await newCart.save()
        res.status(201).json({
          success: true,
          data: newCart
        })
      }catch(e){
        res.status(400).json({
          success: false,
          message: e.message
        })}
}

exports.addQuantity = async (req,res) => {
    try{
        const getCart = await Cart.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        getCart.total_cost = getCart.quantity*getCart.cost

        await getCart.save()
        
        

        res.json({
            success: true,
            data: getCart
           
        })
    } catch(e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}


exports.getProducts = async (req,res) => {
    try{
        const getProduct = await Cart.find({buyer_id:req.params.id})

        res.json({
            success: true,
            data: getProduct
           
        })
    } catch(e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}





exports.deleteProduct = async (req, res) => {
    try {
        const currentCart = await Cart.findByIdAndDelete(req.params.id);
        if (!currentCart) {
            res.status(404).json({
                message: "Cart not found!"
            });
        } else {
             res.status(200).json({
                 message: "Cart deleted!"
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
  }