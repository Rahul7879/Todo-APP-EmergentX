
import todo from "../model/Todo.js";

export const addTodo = async (req,res)=>{
 try{
    const newTodo = await todo.create({
        data: req.body.data,
        createAt: Date.now()
      })
      await newTodo.save();
     return res.status(200).json(newTodo);
 }catch(e){
    return res.status(500).json(e.message)
 }
}

export const getAllTodos = async(req,res)=>{
   try{
      const result = await todo.find({});
      return res.status(208).json(result);

   }catch(e){
    return res.status(500).json(e.message)
   }
}


export const toggleTodoDone = async (req, res) => {
   try {
     const id = req.params.id;
    const todoRef = await todo.findById(id);
   
    const t = await todo.findOneAndUpdate(
      {_id: id},{done: !todoRef.done}
    )
    return res.status(220).json({...t,done: !todoRef.done});
   } catch (e) {
     console.error(e);
     return res.status(505).json(e.message);
   }
 }

export const updateTodo = async (req, res) => {
   try {
      const updatedTodo = await todo.findByIdAndUpdate(
         req.params.id,
         { data: req.body.data },
         { new: true }
      );

      if (!updatedTodo) {
         return res.status(404).json({ error: 'Todo not found' });
      }
      return res.status(200).json(updatedTodo);
   } catch (e) {
      console.error(e);
      return res.status(500).json({ error: e.message });
   }
};

export const deleteTodo = async(req,res) =>{
    try{
        const dele = await todo.findByIdAndDelete(req.params.id);
        return res.status(203).json(dele);

    }catch(e){
           return res.status(500).json({error: e.message})
    }
}

