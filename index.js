const prompt = require("prompt-sync")({ sigint: true });

let todos = [];

function generateUniqueId() {
  // TODO: Implementasi fungsi untuk menghasilkan ID unik
  // Ini akan digunakan secara internal untuk setiap objek to-do
  // Contoh: Gabungan waktu saat ini dan angka acak
  let timestamp = Date.now().toString();
  let randomNum = (Math.floor(Math.random() * 1000) + 1).toString();
  return `${timestamp}-${randomNum}`;
}

function addTodo() {
  // TODO: Implementasi logika untuk menambah to-do baru
  // 1. Minta input teks to-do dari user menggunakan `prompt()`
  let todoText = prompt("Please enter a new to-do: ");
  // 2. Validasi input: Pastikan teks tidak kosong atau hanya spasi
  if (todoText.trim() === "") {
    console.log("To-do text cannot be empty.");
    console.log("\n");
    return;
  } else {
    // 3. Buat objek to-do baru dengan properti: id (dari generateUniqueId), text, dan isCompleted (boolean, default false)
    let newTodo = {
      id: generateUniqueId(),
      text: todoText,
      isCompleted: false,
    };
    // 4. Tambahkan objek to-do ini ke array `todos`
    todos.push(newTodo);
    // 5. Beri feedback ke user bahwa to-do berhasil ditambahkan
    console.log(`To-do added: "${todoText}"`);
    console.log("\n");
  }
}

function markTodoCompleted() {
  // TODO: Implementasi logika untuk menandai to-do sebagai selesai
  // 1. Panggil `listTodos()` untuk menampilkan daftar to-do
  listTodos();
  // 2. Minta user memasukkan NOMOR to-do yang ingin ditandai sebagai selesai
        /*if (todos.length === 0) {
          console.log("No to-do's to mark as completed.");
          console.log("\n");
        } else {*/
  let todoNumber = parseInt(
    prompt("Enter the number of the to-do to mark as completed: ")
  );
  // 3. Validasi input: Pastikan nomor adalah angka, dalam rentang yang valid (1 sampai jumlah to-do)
  if (isNaN(todoNumber) || todoNumber < 1 || todoNumber > todos.length) {
    console.log("Invalid number. Please enter a valid number from the list.");
    console.log("\n");
    return;
    // 4. Ubah properti `isCompleted` dari to-do yang dipilih menjadi `true`
    // 5. Beri feedback ke user bahwa to-do berhasil ditandai selesai
    // 6. Tangani kasus jika to-do sudah selesai
  } else {
        /*if (todos[todoNumber - 1].isCompleted) {
          console.log("This to-do is already completed.");
          console.log("\n");
          return;
          } else {*/
    let selectedTodo = todos[todoNumber - 1];
    selectedTodo.isCompleted = true;
    console.log(`${selectedTodo.text} marked as completed.`);
    console.log("\n");
  }
}

function deleteTodo() {
  // TODO: Implementasi logika untuk menghapus to-do
  // 1. Panggil `listTodos()` untuk menampilkan daftar to-do
  listTodos();
  // 2. Minta user memasukkan NOMOR to-do yang ingin dihapus
      /*if (todos.length === 0) {
        console.log("No to-do's to delete.");
        console.log("\n");
        return;
        } else {*/
  let todoNumber = parseInt(
    prompt("Enter the number of the to-do to delete: ")
  );
  // 3. Validasi input: Pastikan nomor adalah angka, dalam rentang yang valid
  if (isNaN(todoNumber) || todoNumber < 1 || todoNumber > todos.length) {
    console.log("Invalid number. Please enter a valid number from the list.");
    console.log("\n");
    return;
  } else {
    // 4. Hapus to-do yang dipilih dari array `todos`
    // 5. Beri feedback ke user bahwa to-do berhasil dihapus
    let selectedTodo = todos[todoNumber - 1];
    todos.splice(todoNumber - 1, 1);
    console.log(`To-do deleted: "${selectedTodo.text}"`);
    console.log("\n");
  }
}

function listTodos() {
  // TODO: Implementasi logika untuk menampilkan semua to-do
  // 1. Tampilkan judul daftar (misal: "--- YOUR TO-DO LIST ---")
  console.log("------- YOUR TO-DO LIST -------");
  // 2. Cek apakah array `todos` kosong. Jika ya, tampilkan pesan "No to-dos to display."
  if (todos.length === 0) {
    console.log("No to-dos to display.");
    console.log("\n");
  } else {
    // 3. Jika tidak kosong, iterasi (loop) melalui array `todos`
    // 4. Untuk setiap to-do, tampilkan nomor urut, status ([DONE] atau [ACTIVE]), dan teks to-do
    //    Contoh format: "1. [ACTIVE] | Belajar JavaScript"
    // 5. Tampilkan garis penutup daftar
    for (let i = 0; i < todos.length; i++) {
      let todo = todos[i];
      let status = todo.isCompleted ? "DONE" : "ACTIVE";
      console.log(`${i + 1}. [${status}] | ${todo.text}`);
      console.log("-------------------------------------------------");
    }
    console.log("\n");
  }
}

function runTodoApp() {
  // TODO: Implementasi logika utama aplikasi (menu interaktif)
  // Ini adalah "otak" aplikasi yang terus berjalan sampai user memilih untuk keluar
  console.log(` (\\ `);
  console.log(` \\'\\ `);
  console.log(`  \\'\\      __________ `);
  console.log(`  / '|    ()_________) `);
  console.log(`  \\ '/     \\ ~~~~~~~~ \\ `);
  console.log(`    \\       \\ ~~~~~~   \\ `);
  console.log(`    ==).     \\__________\\ `);
  console.log(`   (__)      ()__________) `);
  console.log("Welcome to the To-Do Application!");
  console.log("\n");
  let running = true;
  while (running) {
    // 1. Tampilkan menu perintah yang tersedia (add, complete, delete, list, exit)
    console.log("--------- MAIN MENU ---------");
    console.log("[Commands]   |    [Description]");
    console.log("[add]        | Add a new to-do item");
    console.log("[complete]   | Mark a to-do item as completed");
    console.log("[delete]     | Delete a to-do item");
    console.log("[list]       | Show all to-do items");
    console.log("[exit]       | Exit the program");
    console.log("\n");
    // 2. Minta user memasukkan perintah menggunakan `prompt()`
    let userCommand = prompt("Please Enter a command: ").toLowerCase();
    // 3. Gunakan `switch` statement atau `if/else if` untuk memanggil fungsi yang sesuai
    //    berdasarkan perintah yang dimasukkan user
    // 4. Tangani perintah 'exit' untuk menghentikan loop aplikasi
    // 5. Tangani input perintah yang tidak valid
    switch (userCommand) {
      case "add":
        addTodo();
        break;
      case "complete":
        markTodoCompleted();
        break;
      case "delete":
        deleteTodo();
        break;
      case "list":
        listTodos();
        break;
      case "exit":
        running = false;
        console.log("Exiting the to-do application. Goodbye!");
        break;
      default:
        console.log("Invalid command. Please try again.");
        console.log("\n");
    }
  }
}

// Jangan ubah bagian di bawah ini. Ini adalah cara Node.js menjalankan fungsi utama
// dan mengekspor fungsi-fungsi untuk pengujian (jika nanti ada).

if (require.main === module) {
  runTodoApp();
}

module.exports = {
  todos,
  generateUniqueId,
  addTodo,
  markTodoCompleted,
  deleteTodo,
  listTodos,
  runTodoApp,
};
