import React from 'react'

export default function Product() {
  return (
     <section style={{ backgroundColor: '#f0f4f8', padding: '100px 0' }}>
     <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        gap: 48,
        flexWrap: "wrap",
        background: "#1E2E4F",
        borderRadius: 12,
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
        padding: 70,
      }}>
        <div style={{ flex: "1 1 320px" }}>
          <img
            src="/CWT.png"
            alt=""
            style={{ width: "90%", borderRadius: 10, boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
          />
        </div>
        <div style={{ flex: "2 1 400px" }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color:"#D9E1F1" }}>Introducing Our Main Product</h2>
          <p style={{ fontSize: 18, color: "#D9E1F1", marginBottom: 24 }}>
            Our main product is designed to solve your daily problems with ease and efficiency.
            With high-quality materials and modern technology, this product will help you achieve more every day.
          </p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 , color: "#D9E1F1" }}>✔️ High quality and durable</li>
            <li style={{ marginBottom: 8 , color: "#D9E1F1" }}>✔️ Easy to use and maintain</li>
            <li style={{ marginBottom: 8 , color: "#D9E1F1" }}>✔️ Affordable price</li>
          </ul>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#D9E1F1", marginBottom: 20 }}>Rp 150.000</div>
          <button style={{
            background: "#31487A",
            color: "#D9E1F1",
            border: "none",
            borderRadius: 6,
            padding: "14px 36px",
            fontSize: 18,
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 1px 4px rgba(0,0,0,0.07)"
          }}>
            Buy Now
          </button>
        </div>
      </div>
    </section>
    
  );
}

