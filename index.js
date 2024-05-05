const express=require('express');
const app= express();

app.get("/",(req,res)=>{
    res.send("merhaba uyku")
})

app.use(express.json());

app.post("/",(req,res)=>{
    const{msg}= req.body;
    if(!msg || msg?.length===0){
        return res.status(400).send({msg:"Lütfen bir mesaj griin"});
    }
    const islenmisMsg=`işlenmiş veriniz:${msg.toUpperCase()}`;
    res.send({gelenMsg:msg, işlenmişMsg:islenmisMsg})
})

app.listen(3000,()=>{
    console.log(`Server http://localhost:${3000} üzerinde çalışıyor`)
});