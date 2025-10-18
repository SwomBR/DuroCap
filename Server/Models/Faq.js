import mongoose from 'mongoose';

const faqSchema = new mongoose.Schema({
  slnumber: { type: String, required: true },
  question: { type: String, required: true },
  category: { type: String, required: true },
  answers: { type: String, required: true },
});

const Faq = mongoose.model('Faq', faqSchema); 

export default Faq;
