<%@page language="java" import="java.sql.*" %>

<%
    String vemail = request.getParameter("txtEmailLogin");
    String vsenha = request.getParameter("txtSenhaLogin");    

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

    String sql = "SELECT * FROM cliente WHERE email=? AND senha_login=?";

    PreparedStatement stm = conexao.prepareStatement(sql);
    stm.setString(1, vemail);
    stm.setString(2, vsenha);
    
    ResultSet dados = stm.executeQuery();

    if (dados.next()){
        //cria a session chamada usuario
        session.setAttribute("usuario", dados.getString("nome"));
        response.sendRedirect("consultar.jsp");
    }
    else{
        out.print("<h2>Login Incorreto</h2>");
    }


%>