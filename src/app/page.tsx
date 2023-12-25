import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <img width={350} height={700} src="https://content2.rozetka.com.ua/goods/images/original/72555843.jpg"/>
        <h1>This is a website about my favorite book</h1>
        <p>Harry Potter is a fantasy book series written by J.K. Rowling. It follows the life and adventures of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, who all attend Hogwarts School of Witchcraft and Wizardry. The series explores themes of friendship, bravery, and the eternal struggle between good and evil, with Harry confronting the dark wizard Lord Voldemort. The books have captivated readers worldwide, becoming a cultural phenomenon with film adaptations, merchandise, and a lasting impact on literature and popular culture.</p>
    </main>
  )
}
