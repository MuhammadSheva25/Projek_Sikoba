"use client";

import React, { useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import logoBPS from "@/assets/contoh.jpg"; // Pastikan gambar logo ada di folder `assets`

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    // Tambahkan logika autentikasi di sini
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.loginBox}>
        <Image src={logoBPS} alt="Logo BPS" width={100} height={100} />
        <h2 className={styles.title}>BADAN PUSAT STATISTIK</h2>
        <p className={styles.subtitle}>Masukkan Username dan Password untuk login admin</p>

        <form onSubmit={handleLogin}>
          <div className={styles.inputGroup}>
            <i className="fas fa-user"></i>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <a href="#" className={styles.forgotPassword}>Lupa password?</a>

          <button type="submit" className={styles.loginButton}>MASUK</button>

          <p className={styles.switchLogin}>
            Masuk sebagai User? <a href="/login/user">Klik disini</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
