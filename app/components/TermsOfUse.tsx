import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import type React from "react" // Added import for React

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-sm p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Termos de Uso</h1>

        <ScrollArea className="h-[60vh] mb-6 rounded-md border p-4">
          <div className="space-y-6">
            <Section title="1. Aceitação dos Termos">
              Ao acessar e usar este serviço, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você
              não concordar com algum parte destes termos, você não poderá usar nosso serviço.
            </Section>

            <Section title="2. Descrição do Serviço">
              Nosso serviço fornece [breve descrição do seu serviço]. Reservamo-nos o direito de modificar, suspender ou
              descontinuar o serviço a qualquer momento, com ou sem aviso prévio.
            </Section>

            <Section title="3. Registro de Conta">
              Para usar certos recursos do nosso serviço, você pode precisar criar uma conta. Você é responsável por
              manter a confidencialidade de sua conta e senha.
            </Section>

            <Section title="4. Propriedade Intelectual">
              O conteúdo, recursos e funcionalidade deste serviço são de propriedade da [Nome da Empresa] e estão
              protegidos por leis de direitos autorais, marcas registradas e outras leis de propriedade intelectual.
            </Section>

            <Section title="5. Limitação de Responsabilidade">
              Em nenhum caso a [Nome da Empresa] será responsável por quaisquer danos diretos, indiretos, incidentais,
              consequenciais ou punitivos decorrentes do uso ou incapacidade de usar este serviço.
            </Section>

            <Section title="6. Alterações nos Termos">
              Reservamo-nos o direito de modificar ou substituir estes termos a qualquer momento. É sua responsabilidade
              verificar periodicamente se houve alterações.
            </Section>

            <Section title="7. Lei Aplicável">
              Estes termos serão regidos e interpretados de acordo com as leis do [seu país/estado], sem considerar suas
              disposições sobre conflitos de leis.
            </Section>
          </div>
        </ScrollArea>

        <div className="flex justify-center">
          <Button
            size="lg"
            className="px-8 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:opacity-90 transition-opacity"
            onClick={() => {
              // Adicione aqui a lógica para aceitar os termos
              console.log("Termos aceitos")
            }}
          >
            Aceitar Termos
          </Button>
        </div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{children}</p>
    </div>
  )
}

