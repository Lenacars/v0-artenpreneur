"use client"

import { useState } from "react"
import CourseCard from "@/components/course-card"

const categories = [
  { id: "all", name: "Tüm Programlar" },
  { id: "music", name: "Müzik" },
  { id: "visual-arts", name: "Görsel Sanatlar" },
  { id: "theater", name: "Tiyatro" },
  { id: "cinema", name: "Sinema" },
  { id: "literature", name: "Edebiyat" },
]

const courses = [
  {
    id: "1",
    title: "Sanatçılar İçin Yazılı İletişim",
    instructor: "Sanat Deliorman",
    category: "communication",
    price: "₺90,00",
  },
  {
    id: "2",
    title: "Kültür Sanat Projeleri İçin Kitlesel Fonlama",
    instructor: "Dr. Seda Aktaş",
    category: "management",
    price: "₺90,00",
  },
  {
    id: "3",
    title: "Yaratıcı Girişimcilik ve Teknoloji",
    instructor: "Begüm Meriç",
    category: "digital",
    price: "₺90,00",
  },
  {
    id: "4",
    title: "Kültür ve Sanat İçin Kaynak Geliştirme",
    instructor: "Gizem Gezenoğlu",
    category: "management",
    price: "₺90,00",
  },
  {
    id: "5",
    title: "Bir Tiyatro Kurmak ve Yönetmek",
    instructor: "Gülhan Kadim",
    category: "theater",
    price: "₺90,00",
  },
  {
    id: "6",
    title: "Yaratıcı Endüstriler ve Yaratıcı Ekonomi",
    instructor: "Doç Dr. Gökçe Dervişoğlu Okandan",
    category: "visual-arts",
    price: "₺80,00",
  },
  {
    id: "7",
    title: "Sanatçılar İçin İletişim 101",
    instructor: "Defne Kayacık",
    category: "communication",
    price: "₺90,00",
  },
  {
    id: "8",
    title: "Sanatçılar İçin Markalaşma ve Dijital Pazarlama",
    instructor: "Ceylan Karaca",
    category: "digital",
    price: "₺90,00",
  },
  {
    id: "9",
    title: "Sanatçılar İçin Yeni Medya İletişimi",
    instructor: "Defne Kayacık",
    category: "communication",
    price: "₺90,00",
  },
  {
    id: "10",
    title: "Film Yapım ve Tanıtım Aşamaları",
    instructor: "Dr. Fırat Sayıcı",
    category: "cinema",
    price: "₺80,00",
  },
  {
    id: "11",
    title: "Bağımsız Müzisyenler İçin Müzik Sektörüne Giriş",
    instructor: "Dr. Funda Lena",
    category: "music",
    price: "₺90,00",
  },
  {
    id: "12",
    title: "Müzik Endüstrisinde Sanatçı ve Proje Yönetimi",
    instructor: "Fahranaz Bozkurt",
    category: "music",
    price: "₺90,00",
  },
  {
    id: "13",
    title: "Kültür Sanat Alanında Ağ Ve İşbirlikleri Geliştirme",
    instructor: "İlkay Bilgiç",
    category: "management",
    price: "₺90,00",
  },
  {
    id: "14",
    title: "Telif Hakları Hukuku",
    instructor: "Prof. Dr. Tekin Memiş",
    category: "law",
    price: "₺90,00",
  },
  {
    id: "15",
    title: "Sanatçının Galaksi Rehberi - Görsel Sanatlar",
    instructor: "Saliha Yavuz",
    category: "visual-arts",
    price: "₺90,00",
  },
  {
    id: "16",
    title: "NFT ve Metamüzik Endüstrisine Giriş",
    instructor: "Tolga Akyıldız",
    category: "digital",
    price: "₺90,00",
  },
]

const CourseCategories = () => {
  const [activeTab, setActiveTab] = useState("all")

  const filteredCourses = activeTab === "all" ? courses : courses.filter((course) => course.category === activeTab)

  return (
    <div>
      <div className="flex flex-wrap justify-center mb-8 gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`px-4 py-2 rounded-md text-base transition-colors ${
              activeTab === category.id ? "bg-primary text-primary-foreground" : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            instructor={course.instructor}
            price={course.price}
          />
        ))}
      </div>
    </div>
  )
}

export default CourseCategories
