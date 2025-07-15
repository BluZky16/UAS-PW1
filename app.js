// Menunggu hingga seluruh konten halaman dimuat
document.addEventListener('DOMContentLoaded', function() {

    // Memilih elemen-elemen penting dari DOM
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Menambahkan event listener ke form untuk menangani penambahan tugas
    todoForm.addEventListener('submit', function(e) {
        // Mencegah form dari perilaku default (reload halaman)
        e.preventDefault(); 
        
        // Mengambil teks dari input dan menghapus spasi di awal/akhir
        const taskText = todoInput.value.trim();

        // Jika input tidak kosong, tambahkan tugas
        if (taskText !== '') {
            addTask(taskText);
            todoInput.value = ''; // Kosongkan input field setelah ditambahkan
            todoInput.focus(); // Fokuskan kembali ke input field
        }
    });

    // Menambahkan event listener ke list untuk menangani penghapusan tugas
    todoList.addEventListener('click', function(e) {
        // Cek apakah elemen yang diklik adalah tombol hapus
        if (e.target.classList.contains('delete-btn')) {
            // Dapatkan elemen <li> induk dari tombol dan hapus
            const listItem = e.target.parentElement;
            todoList.removeChild(listItem);
        }
    });

    /**
     * Fungsi untuk membuat dan menambahkan elemen tugas baru ke dalam daftar
     * @param {string} text - Teks dari tugas yang akan ditambahkan
     */
    function addTask(text) {
        // Membuat elemen list item (li) baru
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        
        // Mengatur teks dari list item
        li.appendChild(document.createTextNode(text));

        // Membuat tombol hapus
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm delete-btn';
        deleteButton.appendChild(document.createTextNode('Hapus'));

        // Menambahkan tombol hapus ke dalam list item
        li.appendChild(deleteButton);
        
        // Menambahkan list item ke dalam daftar (ul)
        todoList.appendChild(li);
    }
});