import React from 'react'
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer'
import logo from '../Imagenes/Logo.png'

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  logo: {
    width: 150,
  },
  headerInfo: {
    textAlign: 'right',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: '#09A603',
  },
  infoSection: {
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  infoGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  infoItem: {
    width: '50%',
    marginBottom: 8,
  },
  label: {
    color: '#666',
    marginBottom: 2,
  },
  value: {
    fontWeight: 'bold',
  },
  table: {
    marginTop: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f8f9fa',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
  },
  tableRow: {
    flexDirection: 'row',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6',
  },
  col1: { width: '30%' },
  col2: { width: '40%' },
  col3: { width: '15%' },
  col4: { width: '15%' },
  totals: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '200px',
    marginBottom: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    color: '#666',
    fontSize: 10,
  },
})

const PreFacturaPDF = ({ reservacionInfo, vehiculos, subtotal, iva, total }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Image style={styles.logo} src={logo} />
        <View style={styles.headerInfo}>
          <Text>Pre-Factura #{reservacionInfo.id}</Text>
          <Text>Fecha: {reservacionInfo.fecha}</Text>
        </View>
      </View>

      <Text style={styles.title}>Pre-Factura</Text>

      {/* Información de la empresa */}
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Información de la Empresa</Text>
        <View style={styles.infoGrid}>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Empresa:</Text>
            <Text style={styles.value}>{reservacionInfo.empresa}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Correo:</Text>
            <Text style={styles.value}>{reservacionInfo.correo}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Teléfono:</Text>
            <Text style={styles.value}>{reservacionInfo.telefono}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Dirección:</Text>
            <Text style={styles.value}>{reservacionInfo.direccion}</Text>
          </View>
        </View>
      </View>

      {/* Tabla de vehículos */}
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.col1}>Vehículo</Text>
          <Text style={styles.col2}>Fechas</Text>
          <Text style={styles.col3}>Cantidad</Text>
          <Text style={styles.col4}>Subtotal</Text>
        </View>
        {vehiculos.map((vehiculo) => (
          <View key={vehiculo.id} style={styles.tableRow}>
            <View style={styles.col1}>
              <Text>{vehiculo.nombre}</Text>
              <Text style={styles.label}>{vehiculo.tipo}</Text>
            </View>
            <View style={styles.col2}>
              <Text>{`${vehiculo.fechaInicio} - ${vehiculo.fechaFin}`}</Text>
            </View>
            <Text style={styles.col3}>{vehiculo.cantidad}</Text>
            <Text style={styles.col4}>${vehiculo.subtotal}</Text>
          </View>
        ))}
      </View>

      {/* Totales */}
      <View style={styles.totals}>
        <View style={styles.totalRow}>
          <Text>Subtotal:</Text>
          <Text>${subtotal}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text>IVA (13%):</Text>
          <Text>${iva}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.value}>Total:</Text>
          <Text style={styles.value}>${total}</Text>
        </View>
      </View>

      {/* Pie de página */}
      <View style={styles.footer}>
        <Text>Este documento es una pre-factura y no tiene validez fiscal</Text>
      </View>
    </Page>
  </Document>
)

export default PreFacturaPDF 