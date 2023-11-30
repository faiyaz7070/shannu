const express=require("express")
const Model=require("../models/model")
const router=express.Router()

router.post("/add",async(req,res)=>{
    try {
        const {name,price,place}=req.body;
        const data=new Model({name,price,place})
        await data.save()
        res.send("data added successfully")
    } catch (error) {
        res.send(error)
    }

})
router.get("/get", async (req, res) => {
    try {
        const data = await Model.find();
        res.send({ searchResult: data });
    } catch (error) {
        res.send(error);
    }
});
router.patch("/edit/:id",async(req,res)=>{
try {
    
    const id=req.params.id
    const data=req.body
    const patchdata=await Model.findByIdAndUpdate({_id:id},data)
    res.send("updated successful")

} catch (error) {
res.send(error)
}
})
router.delete("/delete/:id",async(req,res)=>{
    try {
        
        const id=req.params.id
    
        const patchdata=await Model.findByIdAndDelete({_id:id})
        res.send("Deleted successful")
    
    } catch (error) {
    res.send(error)
    }
    })

    router.get("/search", async (req, res) => {
        try {
            const { name, place } = req.query;
    
            let searchQuery = {};
    
            if (name) {
                // Use a case-insensitive regular expression for name search
                searchQuery.name = { $regex: new RegExp(name, 'i') };
            }
    
            if (place) {
                searchQuery.place = place;
            }
    
            const searchResult = await Model.find(searchQuery);
    
            res.send({
                message: "Search successful",
                searchResult: searchResult
            });
        } catch (error) {
            console.error("Error searching data:", error);
            res.status(500).send("Internal Server Error");
        }
    });
    module.exports=router