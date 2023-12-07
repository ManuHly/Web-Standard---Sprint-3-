<%@page language="java" import="java.sql.*" %>

<%

String vnome  = request.getParameter("Nome");
String vcpf  =  request.getParameter("CPF");
String vemail  = request.getParameter("Email");
String vtelefone  = request.getParameter("Telefone");
String vdata  = request.getParameter("Data");
String vsenha  = request.getParameter("Senha1");

//Variaveis para o Banco de Dados
String banco = "zoologico";
String endereco = "jdbc:mysql://localhost:3306/"+banco;
String usuario = "root";
String senha = "";

//Variaveis para o Driver
String driver = "com.mysql.jdbc.Driver";

//Carregar Drive na Memoria
Class.forName(driver);

//Criar Variavel para conectar com o Banco de Dados
Connection conexao;

//Abrir a conexão com o Banco de Dados
conexao = DriverManager.getConnection(endereco, usuario, senha);

String sql = "INSERT INTO `cliente` (`nome`, `CPF`, `email`, `telefone`, `data_nascimento`, `senha_login`) VALUES (?,?,?,?,?,?);";

PreparedStatement stm = conexao.prepareStatement(sql);
stm.setString(1, vnome);
stm.setString(2, vcpf);
stm.setString(3, vemail);
stm.setString(4, vtelefone);
stm.setString(5, vdata);
stm.setString(6, vsenha);

stm.execute();
stm.close();

out.print("Dados Gravados com sucesso!!!");
out.print("<br><br>");
out.print("<a href='../index.html'>Logar</a>");

%>