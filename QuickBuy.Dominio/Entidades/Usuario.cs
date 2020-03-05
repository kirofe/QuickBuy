﻿using System.Collections.Generic;

namespace QuickBuy.Dominio.Entidades
{
    public class Usuario : Entidade
    {        
        public int    Id        { get; set; }
        public string Email     { get; set; }
        public string Nome      { get; set; }
        public string SobreNome { get; set; }
        public string Senha     { get; set; }

        /// <summary>
        /// Um Usuario pode ter nenhum ou muitos pedidos
        /// </summary>
        public virtual ICollection<Pedido> Pedidos { get; set; }

        public override void Validade()
        {

            LimparMensagensValidacao();

            if (string.IsNullOrEmpty(Email))
                AdicionarCritica("Crítica - Email não foi informado");

            if (string.IsNullOrEmpty(Senha))
                AdicionarCritica("Crítica - Senha não foi informado");
        }
    }
}
