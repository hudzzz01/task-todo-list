class responView{
    static ok(res,data){
        res.json({
            status:"ok",
            data : data
        })
    }

    static err(res,err){
        res.json({
            status:"err",
            err : err
        })
    }
}

export default responView;