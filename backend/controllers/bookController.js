import Book from "../models/Book.js";

//get all workouts
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//create workout

export const createBook = async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    publisher: req.body.publisher,
  });

  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteBook = async(req, res) => {
    const {id} = req.params
    const book = await Book.findOneAndDelete({_id: id})

    if(!book){
        return res.status(404).json({error: 'No such book'})
    }

   
    res.status(200).json(workout)
}


export const updateBook = async (req, res => {
  const {id} = req.params
  const workout = Workout.findOneAndUpdate({_id: id}, {
      ...req.body
  }
  )

  if(!workout){
      return res.status(404).json({error: 'No such workout'})
  }

 
  res.status(200).json(workout)
})
