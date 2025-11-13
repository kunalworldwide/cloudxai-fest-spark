<template>
  <v-container fluid class="faq-section py-16">
    <v-row class="justify-center">
      <v-col cols="12" lg="11" xl="10">
        <v-row>
          <!-- Left Side Content -->
          <v-col cols="12" md="5" lg="4" class="left-content">
            <div class="section-tag">
              <span class="tag-line"></span>
              <span class="tag-text">FREQUENTLY ASKED QUESTIONS</span>
            </div>
            
            <h2 class="main-heading mt-6">
              DO YOU <span class="highlight">HAVE ANY QUESTION ?</span>
            </h2>
            
            <p class="description mt-6">
              Discussing the best techniques for branding to deep dive into consumers mind.
            </p>
            
            <v-btn 
              class="purchase-btn mt-8" 
              size="large"
              rounded="pill"
            >
              Purchase Ticket
            </v-btn>
          </v-col>
          
          <!-- Right Side - FAQ Items -->
          <v-col cols="12" md="7" lg="8" class="faq-items">
            <v-expansion-panels 
              variant="accordion" 
              class="faq-expansion-panels"
            >
              <v-expansion-panel
                v-for="(item, index) in faqData"
                :key="index"
                class="faq-panel"
                elevation="0"
              >
                <v-expansion-panel-title class="faq-question">
                  {{ item.question }}
                </v-expansion-panel-title>
                <v-expansion-panel-text class="faq-answer">
                  {{ item.answer }}
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import faq from "@/assets/data/faq.json";

const faqData = ref(faq);
</script>

<style scoped lang="scss">
.faq-section {
  background: #ffffff;
  
  .left-content {
    padding-right: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media (max-width: 960px) {
      padding-right: 0;
      margin-bottom: 3rem;
    }
  }
  
  .section-tag {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    
    .tag-line {
      width: 40px;
      height: 3px;
      background: #4169E1;
      border-radius: 2px;
    }
    
    .tag-text {
      font-size: 0.875rem;
      font-weight: 600;
      color: #4169E1;
      letter-spacing: 0.5px;
    }
  }
  
  .main-heading {
    font-size: clamp(1.75rem, 4vw, 2.75rem);
    font-weight: 700;
    line-height: 1.3;
    color: #1a1a2e;
    
    .highlight {
      color: #1a1a2e;
      font-weight: 800;
    }
  }
  
  .description {
    font-size: 1rem;
    line-height: 1.7;
    color: #6b7280;
    max-width: 450px;
    
    @media (max-width: 960px) {
      max-width: 100%;
    }
  }
  
  .purchase-btn {
    background: linear-gradient(135deg, #7fffd4 0%, #6ee7b7 100%) !important;
    color: #1a1a2e !important;
    font-weight: 600;
    text-transform: none;
    font-size: 1rem;
    letter-spacing: 0.3px;
    padding: 0.75rem 2.5rem !important;
    box-shadow: 0 4px 15px rgba(127, 255, 212, 0.3);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(127, 255, 212, 0.4);
    }
  }
  
  .faq-items {
    display: flex;
    align-items: center;
  }
  
  .faq-expansion-panels {
    background: transparent;
    width: 100%;
    
    :deep(.v-expansion-panel) {
      background: #ffffff;
      border-radius: 60px !important;
      border: 1.5px solid #e5e7eb;
      margin-bottom: 1rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
      
      &::before {
        box-shadow: none !important;
      }
      
      &::after {
        border: none !important;
      }
      
      &:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      }
      
      &:last-child {
        margin-bottom: 0;
      }
      
      @media (max-width: 600px) {
        border-radius: 40px !important;
      }
    }
    
    :deep(.v-expansion-panel--active) {
      border-radius: 30px !important;
      
      @media (max-width: 600px) {
        border-radius: 25px !important;
      }
    }
    
    :deep(.v-expansion-panel-title) {
      padding: 1.75rem 2.5rem;
      font-size: 1.05rem;
      font-weight: 600;
      color: #1e293b;
      min-height: unset;
   
      
      &:hover {
        background: transparent;
      }
      
      .v-expansion-panel-title__overlay {
        display: none;
      }
      
      @media (max-width: 600px) {
        padding: 1.5rem 1.75rem;
        font-size: 0.95rem;
      }
    }
    
   
    
    :deep(.v-expansion-panel-text) {
      .v-expansion-panel-text__wrapper {
        padding: 0 2.5rem 1.75rem 2.5rem;
        
        @media (max-width: 600px) {
          padding: 0 1.75rem 1.5rem 1.75rem;
        }
      }
    }
    
    :deep(.v-expansion-panel-text__wrapper) {
      font-size: 0.95rem;
      line-height: 1.7;
      color: #64748b;
    }
  }
}
</style>