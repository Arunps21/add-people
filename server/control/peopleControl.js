const peopleModel = require("../model/peopleModel");

const addPeople = (req, res) => {
  try {
    const { name, num } = req.body;
    console.log = req.body;
    peopleModel.create({
      name,
      num,
    });
    res.status(200).json("User added succesfully");
  } catch (err) {
    console.log(err);
    res.status(500).json("Error adding user");
  }
};

const viewPeople = async (req, res) => {
  const data = await peopleModel.find();
  data.length > 0 ? res.json(data) : res.json([]);
};

const editPeople = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await peopleModel.findOne({ _id: id });
    console.log("Data fetched:", data);
    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const updatePeople = async (req, res) => {
  const id = req.params.id;
  const { name, num } = req.body;
  await peopleModel.updateOne({ _id: id }, { name, num });
  res.json("User updated succesfully")
};

const delPeople= async(req,res)=>{
    const id = req.params.id
    await peopleModel.deleteOne({_id : id})
    res.json("User deletd successfully")
}

module.exports = { addPeople, viewPeople, editPeople, updatePeople, delPeople };
